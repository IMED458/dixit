/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from '@google/genai';
import { Card } from '../src/types';

let genAIClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI | null {
  if (!genAIClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === 'MY_GEMINI_API_KEY') {
      return null;
    }
    genAIClient = new GoogleGenAI({ apiKey: key });
  }
  return genAIClient;
}

export async function generateSurrealAiCard(userPrompt?: string): Promise<Card | null> {
  const ai = getGenAI();
  const promptText = userPrompt || 'Surreal, whimsical dreamlike artwork, metaphorical, artistic oil painting style, vibrant pastel colors, masterpiece';
  
  if (ai) {
    try {
      // Generate image using Gemini generateImages or model
      const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: promptText,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '3:4',
        },
      });

      if (response.generatedImages && response.generatedImages.length > 0) {
        const base64Img = response.generatedImages[0].image.imageBytes;
        const dataUrl = `data:image/jpeg;base64,${base64Img}`;
        const newId = `ai_card_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
        return {
          id: newId,
          url: dataUrl,
          thumbnailUrl: dataUrl,
          title: 'AI Dream Artwork',
          tags: ['ai', 'surreal', 'dream'],
          category: 'surreal',
          provider: 'ai',
          author: 'Gemini AI'
        };
      }
    } catch (err) {
      console.warn('AI image generation fallback due to error:', err);
    }
  }

  // Fallback if API key missing or error occurs
  const randomSeed = Math.floor(Math.random() * 100000);
  const fallbackUrl = `https://picsum.photos/seed/aicard_${randomSeed}/800/1000`;
  return {
    id: `ai_fallback_${randomSeed}`,
    url: fallbackUrl,
    thumbnailUrl: fallbackUrl,
    tags: ['dream', 'surreal', 'art'],
    category: 'surreal',
    provider: 'demo',
    author: 'DreamClue Generator'
  };
}
