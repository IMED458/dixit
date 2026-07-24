/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import http from 'http';
import path from 'path';
import { WebSocketServer, WebSocket } from 'ws';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { roomManager } from './server/roomManager';
import { ClientToServerAction } from './src/types';
import { generateSurrealAiCard } from './server/aiCardGenerator';

dotenv.config();

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  const server = http.createServer(app);
  const wss = new WebSocketServer({ server });

  // REST API Endpoints
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  app.get('/api/rooms', (req, res) => {
    const publicRooms = roomManager.getPublicList();
    res.json(publicRooms);
  });

  app.get('/api/cards', (req, res) => {
    res.json(roomManager.getCardPool());
  });

  app.post('/api/ai-card', async (req, res) => {
    const { prompt } = req.body;
    const newCard = await generateSurrealAiCard(prompt);
    if (newCard) {
      roomManager.addCardToPool(newCard);
      res.json({ success: true, card: newCard });
    } else {
      res.status(500).json({ success: false, error: 'Failed to generate card' });
    }
  });

  // WebSocket Handler
  wss.on('connection', (ws: WebSocket) => {
    let boundPlayerId: string | null = null;

    ws.on('message', async (data: string) => {
      try {
        const action: ClientToServerAction = JSON.parse(data.toString());

        switch (action.type) {
          case 'CREATE_ROOM': {
            const result = roomManager.createRoom(
              action.displayName,
              action.avatarUrl,
              action.roomName,
              action.settings
            );
            boundPlayerId = result.playerId;
            roomManager.registerPlayerWs(boundPlayerId, ws);

            ws.send(
              JSON.stringify({
                type: 'RECONNECT_SUCCESS',
                reconnectToken: result.reconnectToken,
                roomCode: result.roomCode
              })
            );
            roomManager.broadcastRoomUpdate(result.roomCode);
            break;
          }

          case 'JOIN_ROOM': {
            const res = roomManager.joinRoom(
              action.roomCode,
              action.displayName,
              action.avatarUrl
            );
            if ('error' in res) {
              ws.send(JSON.stringify({ type: 'ERROR', message: res.error }));
            } else {
              boundPlayerId = res.playerId;
              roomManager.registerPlayerWs(boundPlayerId, ws);
              ws.send(
                JSON.stringify({
                  type: 'RECONNECT_SUCCESS',
                  reconnectToken: res.reconnectToken,
                  roomCode: action.roomCode.toUpperCase().trim()
                })
              );
              roomManager.broadcastRoomUpdate(action.roomCode.toUpperCase().trim());
            }
            break;
          }

          case 'RECONNECT': {
            const info = roomManager.handleReconnect(action.reconnectToken);
            if (info) {
              boundPlayerId = info.playerId;
              roomManager.registerPlayerWs(boundPlayerId, ws);
              ws.send(
                JSON.stringify({
                  type: 'RECONNECT_SUCCESS',
                  reconnectToken: action.reconnectToken,
                  roomCode: info.roomCode
                })
              );
              roomManager.broadcastRoomUpdate(info.roomCode);
            } else {
              ws.send(
                JSON.stringify({
                  type: 'ERROR',
                  message: 'სესიის აღდგენა ვერ მოხერხდა (Session expired or room closed)'
                })
              );
            }
            break;
          }

          case 'LEAVE_ROOM': {
            if (boundPlayerId) {
              roomManager.leaveRoom(boundPlayerId);
              boundPlayerId = null;
            }
            break;
          }

          case 'TOGGLE_READY': {
            if (boundPlayerId) roomManager.toggleReady(boundPlayerId);
            break;
          }

          case 'UPDATE_SETTINGS': {
            if (boundPlayerId) roomManager.updateSettings(boundPlayerId, action.settings);
            break;
          }

          case 'START_GAME': {
            if (boundPlayerId) roomManager.startGame(boundPlayerId);
            break;
          }

          case 'SUBMIT_CLUE_AND_CARD': {
            if (boundPlayerId)
              roomManager.submitClueAndCard(boundPlayerId, action.clue, action.cardId);
            break;
          }

          case 'SUBMIT_PLAYER_CARD': {
            if (boundPlayerId) roomManager.submitPlayerCard(boundPlayerId, action.cardId);
            break;
          }

          case 'SUBMIT_VOTE': {
            if (boundPlayerId) roomManager.submitVote(boundPlayerId, action.cardId);
            break;
          }

          case 'SEND_CHAT': {
            if (boundPlayerId) roomManager.sendChatMessage(boundPlayerId, action.message);
            break;
          }

          case 'SEND_REACTION': {
            if (boundPlayerId) roomManager.sendReaction(boundPlayerId, action.emoji);
            break;
          }

          case 'LIST_PUBLIC_ROOMS': {
            const rooms = roomManager.getPublicList();
            ws.send(JSON.stringify({ type: 'ROOM_LIST', rooms }));
            break;
          }
        }
      } catch (err) {
        console.error('Error handling WebSocket message:', err);
      }
    });

    ws.on('close', () => {
      if (boundPlayerId) {
        roomManager.handleDisconnect(boundPlayerId);
        roomManager.unregisterPlayerWs(boundPlayerId);
      }
    });
  });

  // Vite Middleware for development mode vs Production static serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`DreamClue Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
