/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from './types';

export const i18n = {
  ka: {
    gameTitle: 'DreamClue',
    gameSubTitle: 'სიზმრის მინიშნება',
    tagline: 'ონლაინ მრავალმოთამაშიანი სურათების და მინიშნებების ასოციაციური თამაში',
    enterName: 'შეიყვანეთ თქვენი სახელი',
    chooseAvatar: 'აირჩიეთ ავატარი',
    createRoom: 'ოთახის შექმნა',
    joinRoom: 'ოთახში შესვლა',
    publicLobby: 'საჯარო ოთახები',
    noPublicRooms: 'აქტიური საჯარო ოთახები არ არის',
    roomCode: 'ოთახის კოდი',
    enterRoomCode: 'შეიყვანეთ 6-ნიშნა კოდი',
    join: 'შესვლა',
    guest: 'სტუმარი',
    quickStart: 'სწრაფი დაწყება',
    howToPlay: 'როგორ ვითამაშოთ?',
    rules: 'წესები',
    settings: 'პარამეტრები',
    adminPanel: 'ადმინის პანელი',
    ready: 'მზად ვარ',
    notReady: 'არ ვარ მზად',
    startGame: 'თამაშის დაწყება',
    waitingForHost: 'ველოდებით მასპინძელს თამაშის დასაწყებად...',
    waitingForPlayers: 'ველოდებით მოთამაშეებს (მინიმუმ 3 მოთამაშე)...',
    host: 'მასპინძელი',
    you: 'თქვენ',
    spectator: 'მაყურებელი',
    playersCount: 'მოთამაშეები',
    minPlayersNeeded: 'საჭიროა მინიმუმ 3-4 მოთამაშე',
    copyLink: 'ბმულის კოპირება',
    linkCopied: 'ბმული დაკოპირდა!',
    leaveRoom: 'ოთახის დატოვება',
    kick: 'გაგდება',
    makeHost: 'მასპინძლად ქცევა',
    chat: 'ჩატი',
    send: 'გაგზავნა',
    typeMessage: 'ჩაწერთ შეტყობინება...',
    reactions: 'რეაქციები',
    saveProfile: 'შენახვა',
    
    // Game phases
    phaseLobby: 'ლობი',
    phaseDealing: 'ბარათების დარიგება...',
    phaseStorytellerSelecting: 'მთხრობელი ირჩევს ბარათს',
    phasePlayersSelecting: 'მოთამაშეები ირჩევენ ბარათს',
    phaseRevealing: 'ბარათების გამოვლენა',
    phaseVoting: 'ხმის მიცემა',
    phaseScoring: 'ქულების დათვლა',
    phaseRoundResults: 'რაუნდის შედეგები',
    phaseGameOver: 'თამაში დასრულდა!',

    // In-game labels
    storyteller: 'მთხრობელი',
    currentStoryteller: 'ამ რაუნდის მთხრობელი',
    cluePrompt: 'ჩაწერეთ მინიშნება და აირჩიეთ ბარათი',
    cluePlaceholder: 'მაგ: „მშვიდი სიზმარი“, „შორეული მოგზაურობა“, „ტყუილით დაწყებული...“',
    submitClueAndCard: 'მინიშნების და ბარათის დადასტურება',
    clueLabel: 'მთხრობელის მინიშნება:',
    yourHand: 'თქვენი ბარათები',
    selectCardForClue: 'აირჩიეთ ბარათი, რომელიც ყველაზე მეტად შეესაბამება მინიშნებას:',
    confirmCardSelection: 'ბარათის არჩევა',
    cardConfirmed: 'ბარათი არჩეულია! ველოდებით სხვა მოთამაშეებს...',
    votingPrompt: 'რომელი ბარათია მთხრობელის? მიეცით ხმა!',
    cantVoteOwnCard: 'თქვენს მიერ ჩამოწერილი ბარათისთვის ხმის მიცემა არ შეგიძლიათ',
    confirmVote: 'ხმის მიცემა',
    voteConfirmed: 'ხმა მიცემულია!',
    storytellerCantVote: 'თქვენ ხართ მთხრობელი. ველოდებით სხვა მოთამაშეების ხმებს...',
    
    // Results & Scoring
    roundResultsTitle: 'რაუნდის შედეგები',
    storytellerCardWas: 'მთხრობელის ნამდვილი ბარათი იყო:',
    scoreBreakdown: 'ქულების გადანაწილება',
    correctGuess: 'გამოიცნო მთხრობელის ბარათი (+3)',
    allOrNoneGuessed: 'ყველამ ან არავინ გამოიცნო (სხვებს +2, მთხრობელს 0)',
    storytellerSuccess: 'მთხრობელის წარმატებული მინიშნება (+3)',
    bonusVotes: 'ბლეფის ბონუსი (+1 ხით მოტყუებულზე)',
    votedForYourCard: 'მოატყუა:',
    nextRoundIn: 'შემდეგი რაუნდი იწყება:',
    nextRound: 'შემდეგი რაუნდი',
    
    // Game over
    winner: 'გამარჯვებული!',
    congratulations: 'გილოცავთ გამარჯვებას!',
    finalLeaderboard: 'საბოლოო რეიტინგი',
    playAgain: 'ხელახლა თამაში',
    backToLobby: 'ლობიში დაბრუნება',
    awards: {
      masterStoryteller: 'ოსტატი მთხრობელი',
      bestBluffer: 'საუკეთესო ბლეფერი',
      cleverInterpreter: 'ენამახვილი ინტელექტუალი',
      mysteryMagnet: 'საიდუმლოების მაგნიტი',
    },

    // Settings
    winningScore: 'სამიზნე ქულა',
    clueTimer: 'მინიშნების ტაიმერი (წმ)',
    cardTimer: 'ბარათის არჩევის ტაიმერი (წმ)',
    votingTimer: 'ხმის მიცემის ტაიმერი (წმ)',
    maxPlayers: 'მაქსიმალური მოთამაშეები',
    threePlayerVariant: '3-მოთამაშიანი სპეც-ვარიანტი (7 ბარათი/2 არჩევანი)',
    publicRoomLabel: 'საჯარო ოთახი',
    writtenClueLabel: 'მინიშნების ჩაწერა',
    verbalClueNotice: 'მინიშნება სიტყვიერად თქვით და აირჩიეთ ბარათი.',
    saveSettings: 'პარამეტრების შენახვა',
    
    // Admin
    cardLibrary: 'ბარათების ბიბლიოთეკა',
    generateAiCard: 'ახალი AI სურათის გენერაცია',
    aiPromptPlaceholder: 'შეიყვანეთ AI სურათის აღწერა (მაგ: surreal flying island in pastel dream)',
    generate: 'გენერაცია',
    addCard: 'ბარათის დამატება',
    imageUrl: 'სურათის URL',
    activeCards: 'აქტიური ბარათები',
    toggleCard: 'ჩართვა / გამორთვა',
    
    // Notifications & System
    reconnected: 'თამაშში წარმატებით დაბრუნდით!',
    playerJoined: 'შემოუერთდა ოთახს',
    playerLeft: 'დატოვა ოთახი',
    connectionLost: 'კავშირი გაწყდა. მიმდინარეობს ხელახლა დაკავშირება...',
    timeExpired: 'დრო ამოიწურა! სისტემამ ავტომატურად შეასრულა სვლა.',
    
    // Rules text
    rulesContent: [
      {
        title: 'თამაშის არსი',
        desc: 'DreamClue არის ასოციაციური სურათების თამაში. ყოველ რაუნდში ერთი მოთამაშე ხდება მთხრობელი. ის ირჩევს თავისი ხელიდან ერთ ბარათს და წერს საიდუმლო მინიშნებას.'
      },
      {
        title: 'მინიშნების ხელოვნება',
        desc: 'მინიშნება შეიძლება იყოს სიტყვა, ფრაზა, ციტატა, სიმღერის სათაური ან ემოცია. ოქროს წესი: მინიშნება არ უნდა იყოს არც ზედმეტად იოლი და არც ზედმეტად გაუგებარი!'
      },
      {
        title: 'სხვა მოთამაშეების სვლა',
        desc: 'სხვა მოთამაშეები თავიანთი ხელიდან ირჩევენ იმ ერთ ბარათს, რომელიც ყველაზე მეტად შეესაბამება მთხრობელის მინიშნებას.'
      },
      {
        title: 'გამოვლენა და ხმის მიცემა',
        desc: 'ყველა არჩეული ბარათი ირევა და გამჟღავნდება ფარულად. მოთამაშეები აძლევენ ხმას იმ ბარათს, რომელიც სჯერათ, რომ მთხრობელისაა (საკუთარ ბარათზე ხმის მიცემა აკრძალულია!).'
      },
      {
        title: 'ქულების დარიცხვა',
        desc: 'თუ ყველამ ან არავინ გამოიცნო: მთხრობელს 0 ქულა, სხვებს +2. თუ ზოგმა გამოიცნო: მთხრობელს +3, გამომცნობებს +3. გარდა ამისა, ყოველი მოთამაშე იღებს +1 ბონუს ქულას თავის ბარათზე მიღებულ ყოველ ხმაზე!'
      }
    ]
  },
  en: {
    gameTitle: 'DreamClue',
    gameSubTitle: 'Dream Clues & Associations',
    tagline: 'Online multiplayer surreal image storytelling and association game',
    enterName: 'Enter your display name',
    chooseAvatar: 'Choose Avatar',
    createRoom: 'Create Room',
    joinRoom: 'Join Room',
    publicLobby: 'Public Rooms',
    noPublicRooms: 'No active public rooms currently',
    roomCode: 'Room Code',
    enterRoomCode: 'Enter 6-character code',
    join: 'Join',
    guest: 'Guest',
    quickStart: 'Quick Play',
    howToPlay: 'How to Play',
    rules: 'Rules',
    settings: 'Settings',
    adminPanel: 'Admin Panel',
    ready: 'Ready',
    notReady: 'Not Ready',
    startGame: 'Start Game',
    waitingForHost: 'Waiting for host to start the game...',
    waitingForPlayers: 'Waiting for players (minimum 3 players)...',
    host: 'Host',
    you: 'You',
    spectator: 'Spectator',
    playersCount: 'Players',
    minPlayersNeeded: 'Minimum 3-4 players required',
    copyLink: 'Copy Room Link',
    linkCopied: 'Link copied to clipboard!',
    leaveRoom: 'Leave Room',
    kick: 'Kick',
    makeHost: 'Make Host',
    chat: 'Chat',
    send: 'Send',
    typeMessage: 'Type a message...',
    reactions: 'Reactions',
    saveProfile: 'Save',
    
    // Game phases
    phaseLobby: 'Lobby',
    phaseDealing: 'Dealing cards...',
    phaseStorytellerSelecting: 'Storyteller is choosing a card',
    phasePlayersSelecting: 'Players selecting matching cards',
    phaseRevealing: 'Revealing Cards',
    phaseVoting: 'Voting',
    phaseScoring: 'Calculating Scores',
    phaseRoundResults: 'Round Results',
    phaseGameOver: 'Game Over!',

    // In-game labels
    storyteller: 'Storyteller',
    currentStoryteller: 'Current Storyteller',
    cluePrompt: 'Write a clue and select one card from your hand',
    cluePlaceholder: 'e.g. "A quiet dream", "A journey through time", "Shadows of truth"',
    submitClueAndCard: 'Confirm Clue & Card',
    clueLabel: 'Storyteller Clue:',
    yourHand: 'Your Hand',
    selectCardForClue: 'Select the card from your hand that best matches the clue:',
    confirmCardSelection: 'Submit Card',
    cardConfirmed: 'Card submitted! Waiting for other players...',
    votingPrompt: 'Which card belongs to the Storyteller? Cast your vote!',
    cantVoteOwnCard: 'You cannot vote for your own submitted card',
    confirmVote: 'Cast Vote',
    voteConfirmed: 'Vote cast!',
    storytellerCantVote: 'You are the Storyteller. Waiting for players to vote...',
    
    // Results & Scoring
    roundResultsTitle: 'Round Results',
    storytellerCardWas: "The Storyteller's card was:",
    scoreBreakdown: 'Score Breakdown',
    correctGuess: 'Guessed Storyteller card (+3)',
    allOrNoneGuessed: 'Everyone or no one guessed (Storyteller 0, others +2)',
    storytellerSuccess: 'Storyteller success (+3)',
    bonusVotes: 'Bluff bonus (+1 for each vote tricked)',
    votedForYourCard: 'Tricked:',
    nextRoundIn: 'Next round in:',
    nextRound: 'Next Round',
    
    // Game over
    winner: 'Winner!',
    congratulations: 'Congratulations on your victory!',
    finalLeaderboard: 'Final Leaderboard',
    playAgain: 'Play Again',
    backToLobby: 'Back to Lobby',
    awards: {
      masterStoryteller: 'Master Storyteller',
      bestBluffer: 'Master Bluffer',
      cleverInterpreter: 'Clever Interpreter',
      mysteryMagnet: 'Mystery Magnet',
    },

    // Settings
    winningScore: 'Winning Score Target',
    clueTimer: 'Clue Timer (sec)',
    cardTimer: 'Card Timer (sec)',
    votingTimer: 'Voting Timer (sec)',
    maxPlayers: 'Max Players',
    threePlayerVariant: '3-Player Special Variant (7 cards/2 submissions)',
    publicRoomLabel: 'Public Room',
    writtenClueLabel: 'Written clue input',
    verbalClueNotice: 'Say the clue out loud and select a card.',
    saveSettings: 'Save Settings',
    
    // Admin
    cardLibrary: 'Card Library',
    generateAiCard: 'Generate AI Card',
    aiPromptPlaceholder: 'Enter AI prompt (e.g. surreal flying island in pastel dream)',
    generate: 'Generate',
    addCard: 'Add Card',
    imageUrl: 'Image URL',
    activeCards: 'Active Cards',
    toggleCard: 'Toggle Active',
    
    // Notifications & System
    reconnected: 'Reconnected to active game!',
    playerJoined: 'joined the room',
    playerLeft: 'left the room',
    connectionLost: 'Connection lost. Reconnecting...',
    timeExpired: 'Time expired! Auto action performed by server.',
    
    // Rules text
    rulesContent: [
      {
        title: 'Objective',
        desc: 'DreamClue is an associative visual card game. Each round, one player becomes the Storyteller, selects a card secretly, and gives a creative clue.'
      },
      {
        title: 'The Art of the Clue',
        desc: 'The clue can be a word, phrase, quote, movie title, or emotion. The secret is to make it clever — not too obvious and not too cryptic!'
      },
      {
        title: 'Player Submissions',
        desc: 'All other players pick one card from their own hand that best fits the Storyteller clue.'
      },
      {
        title: 'Reveal & Voting',
        desc: 'All cards are shuffled secretly and revealed. Players vote for which card they think belongs to the Storyteller (you cannot vote for your own card).'
      },
      {
        title: 'Scoring',
        desc: 'If everyone or nobody guesses: Storyteller gets 0 pts, others get +2. If some guess: Storyteller gets +3, correct guessers get +3. Every player receives +1 bonus point for each vote their card tricked!'
      }
    ]
  }
};

export function t(lang: Language, keyPath: string, params?: Record<string, string>): string {
  const keys = keyPath.split('.');
  let current: any = i18n[lang] || i18n.ka;
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      // fallback to Georgian or key
      let fallback: any = i18n.ka;
      for (const fk of keys) {
        if (fallback && typeof fallback === 'object' && fk in fallback) {
          fallback = fallback[fk];
        } else {
          return keyPath;
        }
      }
      current = fallback;
      break;
    }
  }
  if (typeof current === 'string' && params) {
    let res = current;
    for (const [pk, pv] of Object.entries(params)) {
      res = res.replace(new RegExp(`{${pk}}`, 'g'), pv);
    }
    return res;
  }
  return typeof current === 'string' ? current : keyPath;
}
