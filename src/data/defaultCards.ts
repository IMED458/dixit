/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Card } from '../types';

// A mixed card library: thought-provoking Georgian paintings (Niko Pirosmani,
// served via Wikimedia's Special:FilePath which resolves by file name so the
// image loads reliably regardless of storage hash) blended with a set of
// varied, reliably-loading photos so every hand shows different, evocative
// imagery. The game engine samples GAME_DECK_SIZE cards from this pool.
export const DEFAULT_CARDS: Card[] = [
  {
    "id": "art_001",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%90%E1%83%91%E1%83%A0%E1%83%90%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%90%E1%83%91%E1%83%A0%E1%83%90%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_002",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%90%E1%83%95%E1%83%A2%E1%83%9D%E1%83%9E%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%A0%E1%83%94%E1%83%A2%E1%83%98%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%90%E1%83%95%E1%83%A2%E1%83%9D%E1%83%9E%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%A0%E1%83%94%E1%83%A2%E1%83%98%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_003",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%90%E1%83%AE%E1%83%90%E1%83%9A%E1%83%92%E1%83%90%E1%83%96%E1%83%A0%E1%83%93%E1%83%90_%E1%83%9B%E1%83%94%E1%83%97%E1%83%94%E1%83%95%E1%83%96%E1%83%94._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%90%E1%83%AE%E1%83%90%E1%83%9A%E1%83%92%E1%83%90%E1%83%96%E1%83%A0%E1%83%93%E1%83%90_%E1%83%9B%E1%83%94%E1%83%97%E1%83%94%E1%83%95%E1%83%96%E1%83%94._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_004",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%92%E1%83%9D%E1%83%92%E1%83%9D%E1%83%9C%E1%83%90_%E1%83%91%E1%83%90%E1%83%A2%E1%83%98%E1%83%97_%E1%83%93%E1%83%90_%E1%83%91%E1%83%90%E1%83%A2%E1%83%98%E1%83%A1_%E1%83%AD%E1%83%A3%E1%83%99%E1%83%94%E1%83%91%E1%83%98%E1%83%97%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%92%E1%83%9D%E1%83%92%E1%83%9D%E1%83%9C%E1%83%90_%E1%83%91%E1%83%90%E1%83%A2%E1%83%98%E1%83%97_%E1%83%93%E1%83%90_%E1%83%91%E1%83%90%E1%83%A2%E1%83%98%E1%83%A1_%E1%83%AD%E1%83%A3%E1%83%99%E1%83%94%E1%83%91%E1%83%98%E1%83%97%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_005",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%93%E1%83%90%E1%83%97%E1%83%95%E1%83%98._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%93%E1%83%90%E1%83%97%E1%83%95%E1%83%98._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_006",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%97%E1%83%90%E1%83%95%E1%83%90%E1%83%93%E1%83%98_%E1%83%A7%E1%83%90%E1%83%9C%E1%83%AC%E1%83%98%E1%83%97_%28%E1%83%9B%E1%83%94%E1%83%9A%E1%83%98%E1%83%A2%E1%83%9D%E1%83%9C_%E1%83%A9%E1%83%AE%E1%83%94%E1%83%98%E1%83%AB%E1%83%98%E1%83%A1_%E1%83%9E%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%A0%E1%83%94%E1%83%A2%E1%83%98%29._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98._1906.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%97%E1%83%90%E1%83%95%E1%83%90%E1%83%93%E1%83%98_%E1%83%A7%E1%83%90%E1%83%9C%E1%83%AC%E1%83%98%E1%83%97_%28%E1%83%9B%E1%83%94%E1%83%9A%E1%83%98%E1%83%A2%E1%83%9D%E1%83%9C_%E1%83%A9%E1%83%AE%E1%83%94%E1%83%98%E1%83%AB%E1%83%98%E1%83%A1_%E1%83%9E%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%A0%E1%83%94%E1%83%A2%E1%83%98%29._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98._1906.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_007",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%99%E1%83%90%E1%83%AA%E1%83%98_%E1%83%A7%E1%83%90%E1%83%9C%E1%83%AC%E1%83%98%E1%83%97._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%99%E1%83%90%E1%83%AA%E1%83%98_%E1%83%A7%E1%83%90%E1%83%9C%E1%83%AC%E1%83%98%E1%83%97._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_008",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%9C%E1%83%90%E1%83%91%E1%83%93%E1%83%98%E1%83%90%E1%83%9C%E1%83%98_%E1%83%99%E1%83%90%E1%83%AA%E1%83%98_%E1%83%AE%E1%83%90%E1%83%A0%E1%83%97%E1%83%90%E1%83%9C._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%9C%E1%83%90%E1%83%91%E1%83%93%E1%83%98%E1%83%90%E1%83%9C%E1%83%98_%E1%83%99%E1%83%90%E1%83%AA%E1%83%98_%E1%83%AE%E1%83%90%E1%83%A0%E1%83%97%E1%83%90%E1%83%9C._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_009",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%9C%E1%83%90%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%9B%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%98._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%9C%E1%83%90%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%9B%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%98._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_010",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98._%E1%83%A7%E1%83%A3%E1%83%A0%E1%83%AB%E1%83%9C%E1%83%98%E1%83%A1_%E1%83%99%E1%83%A0%E1%83%94%E1%83%A4%E1%83%90.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98._%E1%83%A7%E1%83%A3%E1%83%A0%E1%83%AB%E1%83%9C%E1%83%98%E1%83%A1_%E1%83%99%E1%83%A0%E1%83%94%E1%83%A4%E1%83%90.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_011",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98_-_%E1%83%93%E1%83%90%E1%83%AD%E1%83%A0%E1%83%98%E1%83%9A%E1%83%98_%E1%83%AF%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1%E1%83%99%E1%83%90%E1%83%AA%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98_-_%E1%83%93%E1%83%90%E1%83%AD%E1%83%A0%E1%83%98%E1%83%9A%E1%83%98_%E1%83%AF%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1%E1%83%99%E1%83%90%E1%83%AA%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_012",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%A5%E1%83%90%E1%83%9A%E1%83%98_%E1%83%A1%E1%83%90%E1%83%90%E1%83%A6%E1%83%93%E1%83%92%E1%83%9D%E1%83%9B%E1%83%9D_%E1%83%99%E1%83%95%E1%83%94%E1%83%A0%E1%83%AA%E1%83%AE%E1%83%94%E1%83%91%E1%83%98%E1%83%97%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%A5%E1%83%90%E1%83%9A%E1%83%98_%E1%83%A1%E1%83%90%E1%83%90%E1%83%A6%E1%83%93%E1%83%92%E1%83%9D%E1%83%9B%E1%83%9D_%E1%83%99%E1%83%95%E1%83%94%E1%83%A0%E1%83%AA%E1%83%AE%E1%83%94%E1%83%91%E1%83%98%E1%83%97%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_013",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%A8%E1%83%95%E1%83%94%E1%83%9A%E1%83%98_%E1%83%9C%E1%83%A3%E1%83%99%E1%83%A0%E1%83%98%E1%83%97_%E1%83%AC%E1%83%A7%E1%83%90%E1%83%9A%E1%83%96%E1%83%94%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%A8%E1%83%95%E1%83%94%E1%83%9A%E1%83%98_%E1%83%9C%E1%83%A3%E1%83%99%E1%83%A0%E1%83%98%E1%83%97_%E1%83%AC%E1%83%A7%E1%83%90%E1%83%9A%E1%83%96%E1%83%94%2C_%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_014",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%A8%E1%83%9D%E1%83%97%E1%83%90_%E1%83%A0%E1%83%A3%E1%83%A1%E1%83%97%E1%83%90%E1%83%95%E1%83%94%E1%83%9A%E1%83%98._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98._1913.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E1%83%A8%E1%83%9D%E1%83%97%E1%83%90_%E1%83%A0%E1%83%A3%E1%83%A1%E1%83%97%E1%83%90%E1%83%95%E1%83%94%E1%83%9A%E1%83%98._%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D_%E1%83%A4%E1%83%98%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98._1913.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_015",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-10.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-10.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_016",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-100.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-100.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_017",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-104.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-104.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_018",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-105.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-105.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_019",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-11.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-11.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_020",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-113.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-113.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_021",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-115.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-115.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_022",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-12.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-12.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_023",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-128.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-128.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_024",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-129.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-129.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_025",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-130.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-130.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_026",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-131.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-131.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_027",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-132.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-132.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_028",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-134.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-134.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_029",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-135.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-135.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_030",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-136.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-136.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_031",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-137.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-137.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_032",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-139.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-139.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_033",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-143.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-143.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_034",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-148.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-148.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_035",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-15.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-15.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_036",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-156.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-156.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_037",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-161.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-161.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_038",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-164.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-164.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_039",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-166.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-166.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_040",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-183.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-183.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_041",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-194.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-194.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_042",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-195.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-195.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_043",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-196.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-196.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_044",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-197.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-197.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_045",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-201.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-201.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_046",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-203.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-203.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_047",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-22.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-22.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_048",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-24.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-24.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_049",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-25.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-25.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_050",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-26.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-26.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_051",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-30.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-30.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_052",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-32.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-32.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_053",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-34.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-34.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_054",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-35.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-35.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_055",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-36.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-36.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_056",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-38.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-38.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_057",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-38_-_2.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-38_-_2.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_058",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-4.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-4.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_059",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-45.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-45.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_060",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-50.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-50.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_061",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-57.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-57.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_062",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-60.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-60.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_063",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-64.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-64.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_064",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-65.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-65.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_065",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-7.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-7.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_066",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-73.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-73.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_067",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-76.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-76.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_068",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-77.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-77.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_069",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-78.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-78.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_070",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-8.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-8.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_071",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-81.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-81.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_072",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-82.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-82.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_073",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-88.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-88.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_074",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-89.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-89.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_075",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-92.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-92.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_076",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-93.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-93.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_077",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-95.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9F%D0%B8%D1%80%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D0%B8._%D0%91-95.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_078",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/An_eagle_with_a_captured_hare.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/An_eagle_with_a_captured_hare.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_079",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Bear_and_her_cubs.png?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bear_and_her_cubs.png?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_080",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Celebration._Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Celebration._Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_081",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Celebration_by_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Celebration_by_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_082",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Childless_Millionaire_and_a_Poor_Woman_Blessed_with_CHildren.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Childless_Millionaire_and_a_Poor_Woman_Blessed_with_CHildren.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_083",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cook_by_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cook_by_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_084",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Deer._Niko_Pirosmani._1909.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Deer._Niko_Pirosmani._1909.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_085",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Doctor_on_a_Jackass_-_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Doctor_on_a_Jackass_-_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_086",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Eagle_seizing_a_hare_-_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eagle_seizing_a_hare_-_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_087",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Feast_of_the_Malakans_%28Pirosmani%29.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Feast_of_the_Malakans_%28Pirosmani%29.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_088",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Fest_am_Fluss_Zcheniszkali_von_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fest_am_Fluss_Zcheniszkali_von_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_089",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Fox_by_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fox_by_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_090",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/G._Gabashvili._Portrait_of_a_Prince._1902.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/G._Gabashvili._Portrait_of_a_Prince._1902.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_091",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gabashvili._Khevsur_the_Flag-Bearer.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gabashvili._Khevsur_the_Flag-Bearer.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_092",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Georgian_Woman_with_a_Tambourine_-_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Georgian_Woman_with_a_Tambourine_-_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_093",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Georgian_woman_with_Lechaki_%28Georgian_woman_with_tambourine%29._Oil_on_oilcloth._130X105_cm._Private_collection.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Georgian_woman_with_Lechaki_%28Georgian_woman_with_tambourine%29._Oil_on_oilcloth._130X105_cm._Private_collection.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_094",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gigo_Gabashvili._Georgian_woman.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gigo_Gabashvili._Georgian_woman.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_095",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gigo_Gabashvili._Khevsur_feast.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gigo_Gabashvili._Khevsur_feast.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_096",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gigo_Gabashvili._Oil_on_Cardboard._18x31_cm.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gigo_Gabashvili._Oil_on_Cardboard._18x31_cm.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_097",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gigo_Gabashvli._Church_Feast.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gigo_Gabashvli._Church_Feast.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_098",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Janitor_by_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Janitor_by_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_099",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kakheti_saga._feast.JPG?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kakheti_saga._feast.JPG?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_100",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kinderloser_Million%C3%A4r_und_arme_Frau_mit_Kindern_-_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kinderloser_Million%C3%A4r_und_arme_Frau_mit_Kindern_-_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_101",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lambkin_and_Easter_Table_with_Flying_Angels_-_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lambkin_and_Easter_Table_with_Flying_Angels_-_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_102",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Little_Girl_with_a_Patterned_Balloon_%28ca._1909-1912%29_-_Niko_Pirosmani.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Little_Girl_with_a_Patterned_Balloon_%28ca._1909-1912%29_-_Niko_Pirosmani.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_103",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/NicoPirosmani_MilkingCow.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/NicoPirosmani_MilkingCow.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_104",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_PIROSMANI_%28Nikolai_Aslanovich_Pirosmanashvili%29._%27%27Two_Georgians_at_Marani%27%27._Oil_on_oil-cloth%2C_107x210_cm._Private_collection%2C_Moscow.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_PIROSMANI_%28Nikolai_Aslanovich_Pirosmanashvili%29._%27%27Two_Georgians_at_Marani%27%27._Oil_on_oil-cloth%2C_107x210_cm._Private_collection%2C_Moscow.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_105",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%27%27Black_Lion%27%27._Oil_on_oilcloth._Private_collection.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%27%27Black_Lion%27%27._Oil_on_oilcloth._Private_collection.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_106",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%27%27Threshing_Floor_in_the_Country%27%27._Oil_on_cardboard%2C_80x100_cm._The_Tretyakov_Gallery%2C_Moscow.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%27%27Threshing_Floor_in_the_Country%27%27._Oil_on_cardboard%2C_80x100_cm._The_Tretyakov_Gallery%2C_Moscow.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_107",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%C2%ABA_Deer%C2%BB._91x104_cm.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%C2%ABA_Deer%C2%BB._91x104_cm.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_108",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%C2%ABFox%C2%BB.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%C2%ABFox%C2%BB.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_109",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%C2%ABWalking_Gazelle%C2%BB._62x55_cm._Oli_on_oilcloth.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._%C2%ABWalking_Gazelle%C2%BB._62x55_cm._Oli_on_oilcloth.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_110",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Autumn_Feast._Niko_Six_-_picture_Panel._Oil_on_oilcloth._179%2C5X379.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Autumn_Feast._Niko_Six_-_picture_Panel._Oil_on_oilcloth._179%2C5X379.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_111",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Bear.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Bear.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_112",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Black_Bear.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Black_Bear.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_113",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Black_Buffulo_on_a_White_Background._Oil_on_oilcloth._Private_collection.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Black_Buffulo_on_a_White_Background._Oil_on_oilcloth._Private_collection.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_114",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Celebration.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Celebration.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_115",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Fawn.JPG?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Fawn.JPG?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_116",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Fisherman_among_Rocks._Oil_on_oilcloth._The_Tretyakov_Gallery%2C_Moscow%2C_Russia.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Fisherman_among_Rocks._Oil_on_oilcloth._The_Tretyakov_Gallery%2C_Moscow%2C_Russia.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "art_117",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Lamb.jpg?width=1000",
    "thumbnailUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niko_Pirosmani._Lamb.jpg?width=400",
    "tags": [
      "georgian-art",
      "painting",
      "niko-pirosmani"
    ],
    "category": "georgian-painting",
    "provider": "curated",
    "author": "Niko Pirosmani"
  },
  {
    "id": "photo_001",
    "url": "https://picsum.photos/seed/dreamclue-dream-1/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-dream-1/400/600",
    "title": "Dream",
    "tags": [
      "dreamclue",
      "dream"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "photo_002",
    "url": "https://picsum.photos/seed/dreamclue-lighthouse-2/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-lighthouse-2/400/600",
    "title": "Lighthouse",
    "tags": [
      "dreamclue",
      "lighthouse"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "photo_003",
    "url": "https://picsum.photos/seed/dreamclue-forest-3/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-forest-3/400/600",
    "title": "Forest",
    "tags": [
      "dreamclue",
      "forest"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "photo_004",
    "url": "https://picsum.photos/seed/dreamclue-astronaut-4/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-astronaut-4/400/600",
    "title": "Astronaut",
    "tags": [
      "dreamclue",
      "astronaut"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "photo_005",
    "url": "https://picsum.photos/seed/dreamclue-carousel-5/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-carousel-5/400/600",
    "title": "Carousel",
    "tags": [
      "dreamclue",
      "carousel"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "photo_006",
    "url": "https://picsum.photos/seed/dreamclue-clockwork-6/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-clockwork-6/400/600",
    "title": "Clockwork",
    "tags": [
      "dreamclue",
      "clockwork"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "photo_007",
    "url": "https://picsum.photos/seed/dreamclue-whale-7/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-whale-7/400/600",
    "title": "Whale",
    "tags": [
      "dreamclue",
      "whale"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "photo_008",
    "url": "https://picsum.photos/seed/dreamclue-origami-8/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-origami-8/400/600",
    "title": "Origami",
    "tags": [
      "dreamclue",
      "origami"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "photo_009",
    "url": "https://picsum.photos/seed/dreamclue-aurora-9/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-aurora-9/400/600",
    "title": "Aurora",
    "tags": [
      "dreamclue",
      "aurora"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "photo_010",
    "url": "https://picsum.photos/seed/dreamclue-desert-10/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-desert-10/400/600",
    "title": "Desert",
    "tags": [
      "dreamclue",
      "desert"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "photo_011",
    "url": "https://picsum.photos/seed/dreamclue-violin-11/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-violin-11/400/600",
    "title": "Violin",
    "tags": [
      "dreamclue",
      "violin"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "photo_012",
    "url": "https://picsum.photos/seed/dreamclue-labyrinth-12/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-labyrinth-12/400/600",
    "title": "Labyrinth",
    "tags": [
      "dreamclue",
      "labyrinth"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "photo_013",
    "url": "https://picsum.photos/seed/dreamclue-balloon-13/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-balloon-13/400/600",
    "title": "Balloon",
    "tags": [
      "dreamclue",
      "balloon"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "photo_014",
    "url": "https://picsum.photos/seed/dreamclue-harbor-14/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-harbor-14/400/600",
    "title": "Harbor",
    "tags": [
      "dreamclue",
      "harbor"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "photo_015",
    "url": "https://picsum.photos/seed/dreamclue-glacier-15/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-glacier-15/400/600",
    "title": "Glacier",
    "tags": [
      "dreamclue",
      "glacier"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "photo_016",
    "url": "https://picsum.photos/seed/dreamclue-fox-16/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-fox-16/400/600",
    "title": "Fox",
    "tags": [
      "dreamclue",
      "fox"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "photo_017",
    "url": "https://picsum.photos/seed/dreamclue-temple-17/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-temple-17/400/600",
    "title": "Temple",
    "tags": [
      "dreamclue",
      "temple"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "photo_018",
    "url": "https://picsum.photos/seed/dreamclue-meadow-18/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-meadow-18/400/600",
    "title": "Meadow",
    "tags": [
      "dreamclue",
      "meadow"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "photo_019",
    "url": "https://picsum.photos/seed/dreamclue-comet-19/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-comet-19/400/600",
    "title": "Comet",
    "tags": [
      "dreamclue",
      "comet"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "photo_020",
    "url": "https://picsum.photos/seed/dreamclue-marketplace-20/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-marketplace-20/400/600",
    "title": "Marketplace",
    "tags": [
      "dreamclue",
      "marketplace"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "photo_021",
    "url": "https://picsum.photos/seed/dreamclue-waterfall-21/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-waterfall-21/400/600",
    "title": "Waterfall",
    "tags": [
      "dreamclue",
      "waterfall"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "photo_022",
    "url": "https://picsum.photos/seed/dreamclue-mask-22/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-mask-22/400/600",
    "title": "Mask",
    "tags": [
      "dreamclue",
      "mask"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "photo_023",
    "url": "https://picsum.photos/seed/dreamclue-windmill-23/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-windmill-23/400/600",
    "title": "Windmill",
    "tags": [
      "dreamclue",
      "windmill"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "photo_024",
    "url": "https://picsum.photos/seed/dreamclue-koi-24/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-koi-24/400/600",
    "title": "Koi",
    "tags": [
      "dreamclue",
      "koi"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "photo_025",
    "url": "https://picsum.photos/seed/dreamclue-volcano-25/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-volcano-25/400/600",
    "title": "Volcano",
    "tags": [
      "dreamclue",
      "volcano"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "photo_026",
    "url": "https://picsum.photos/seed/dreamclue-circus-26/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-circus-26/400/600",
    "title": "Circus",
    "tags": [
      "dreamclue",
      "circus"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "photo_027",
    "url": "https://picsum.photos/seed/dreamclue-library-27/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-library-27/400/600",
    "title": "Library",
    "tags": [
      "dreamclue",
      "library"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "photo_028",
    "url": "https://picsum.photos/seed/dreamclue-bridge-28/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-bridge-28/400/600",
    "title": "Bridge",
    "tags": [
      "dreamclue",
      "bridge"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "photo_029",
    "url": "https://picsum.photos/seed/dreamclue-owl-29/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-owl-29/400/600",
    "title": "Owl",
    "tags": [
      "dreamclue",
      "owl"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "photo_030",
    "url": "https://picsum.photos/seed/dreamclue-garden-30/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-garden-30/400/600",
    "title": "Garden",
    "tags": [
      "dreamclue",
      "garden"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "photo_031",
    "url": "https://picsum.photos/seed/dreamclue-sailboat-31/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-sailboat-31/400/600",
    "title": "Sailboat",
    "tags": [
      "dreamclue",
      "sailboat"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "photo_032",
    "url": "https://picsum.photos/seed/dreamclue-castle-32/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-castle-32/400/600",
    "title": "Castle",
    "tags": [
      "dreamclue",
      "castle"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "photo_033",
    "url": "https://picsum.photos/seed/dreamclue-firefly-33/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-firefly-33/400/600",
    "title": "Firefly",
    "tags": [
      "dreamclue",
      "firefly"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "photo_034",
    "url": "https://picsum.photos/seed/dreamclue-dune-34/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-dune-34/400/600",
    "title": "Dune",
    "tags": [
      "dreamclue",
      "dune"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "photo_035",
    "url": "https://picsum.photos/seed/dreamclue-orchard-35/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-orchard-35/400/600",
    "title": "Orchard",
    "tags": [
      "dreamclue",
      "orchard"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "photo_036",
    "url": "https://picsum.photos/seed/dreamclue-reef-36/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-reef-36/400/600",
    "title": "Reef",
    "tags": [
      "dreamclue",
      "reef"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "photo_037",
    "url": "https://picsum.photos/seed/dreamclue-tram-37/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-tram-37/400/600",
    "title": "Tram",
    "tags": [
      "dreamclue",
      "tram"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "photo_038",
    "url": "https://picsum.photos/seed/dreamclue-moth-38/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-moth-38/400/600",
    "title": "Moth",
    "tags": [
      "dreamclue",
      "moth"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "photo_039",
    "url": "https://picsum.photos/seed/dreamclue-fountain-39/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-fountain-39/400/600",
    "title": "Fountain",
    "tags": [
      "dreamclue",
      "fountain"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "photo_040",
    "url": "https://picsum.photos/seed/dreamclue-canyon-40/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-canyon-40/400/600",
    "title": "Canyon",
    "tags": [
      "dreamclue",
      "canyon"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "photo_041",
    "url": "https://picsum.photos/seed/dreamclue-kite-41/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-kite-41/400/600",
    "title": "Kite",
    "tags": [
      "dreamclue",
      "kite"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "photo_042",
    "url": "https://picsum.photos/seed/dreamclue-planet-42/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-planet-42/400/600",
    "title": "Planet",
    "tags": [
      "dreamclue",
      "planet"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "photo_043",
    "url": "https://picsum.photos/seed/dreamclue-bakery-43/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-bakery-43/400/600",
    "title": "Bakery",
    "tags": [
      "dreamclue",
      "bakery"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "photo_044",
    "url": "https://picsum.photos/seed/dreamclue-feather-44/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-feather-44/400/600",
    "title": "Feather",
    "tags": [
      "dreamclue",
      "feather"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "photo_045",
    "url": "https://picsum.photos/seed/dreamclue-iceberg-45/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-iceberg-45/400/600",
    "title": "Iceberg",
    "tags": [
      "dreamclue",
      "iceberg"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "photo_046",
    "url": "https://picsum.photos/seed/dreamclue-lantern-46/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-lantern-46/400/600",
    "title": "Lantern",
    "tags": [
      "dreamclue",
      "lantern"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "photo_047",
    "url": "https://picsum.photos/seed/dreamclue-swamp-47/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-swamp-47/400/600",
    "title": "Swamp",
    "tags": [
      "dreamclue",
      "swamp"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "photo_048",
    "url": "https://picsum.photos/seed/dreamclue-peacock-48/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-peacock-48/400/600",
    "title": "Peacock",
    "tags": [
      "dreamclue",
      "peacock"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "photo_049",
    "url": "https://picsum.photos/seed/dreamclue-mountain-49/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-mountain-49/400/600",
    "title": "Mountain",
    "tags": [
      "dreamclue",
      "mountain"
    ],
    "category": "dream",
    "provider": "curated"
  }
];
