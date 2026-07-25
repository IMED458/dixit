/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Card } from '../types';

// A large, diverse card library spanning many different subjects and moods so
// that every player's hand shows a varied mix (not a single artist or theme).
// Images are served from picsum.photos using a stable per-card seed, which makes
// each card render a consistent, reliably-loading photo. The game engine samples
// GAME_DECK_SIZE cards from this pool for each game.
export const DEFAULT_CARDS: Card[] = [
  {
    "id": "card_001",
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
    "id": "card_002",
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
    "id": "card_003",
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
    "id": "card_004",
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
    "id": "card_005",
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
    "id": "card_006",
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
    "id": "card_007",
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
    "id": "card_008",
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
    "id": "card_009",
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
    "id": "card_010",
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
    "id": "card_011",
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
    "id": "card_012",
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
    "id": "card_013",
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
    "id": "card_014",
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
    "id": "card_015",
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
    "id": "card_016",
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
    "id": "card_017",
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
    "id": "card_018",
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
    "id": "card_019",
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
    "id": "card_020",
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
    "id": "card_021",
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
    "id": "card_022",
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
    "id": "card_023",
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
    "id": "card_024",
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
    "id": "card_025",
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
    "id": "card_026",
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
    "id": "card_027",
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
    "id": "card_028",
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
    "id": "card_029",
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
    "id": "card_030",
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
    "id": "card_031",
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
    "id": "card_032",
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
    "id": "card_033",
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
    "id": "card_034",
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
    "id": "card_035",
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
    "id": "card_036",
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
    "id": "card_037",
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
    "id": "card_038",
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
    "id": "card_039",
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
    "id": "card_040",
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
    "id": "card_041",
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
    "id": "card_042",
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
    "id": "card_043",
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
    "id": "card_044",
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
    "id": "card_045",
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
    "id": "card_046",
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
    "id": "card_047",
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
    "id": "card_048",
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
    "id": "card_049",
    "url": "https://picsum.photos/seed/dreamclue-mountain-49/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-mountain-49/400/600",
    "title": "Mountain",
    "tags": [
      "dreamclue",
      "mountain"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_050",
    "url": "https://picsum.photos/seed/dreamclue-subway-50/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-subway-50/400/600",
    "title": "Subway",
    "tags": [
      "dreamclue",
      "subway"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_051",
    "url": "https://picsum.photos/seed/dreamclue-tulip-51/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-tulip-51/400/600",
    "title": "Tulip",
    "tags": [
      "dreamclue",
      "tulip"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_052",
    "url": "https://picsum.photos/seed/dreamclue-shipwreck-52/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-shipwreck-52/400/600",
    "title": "Shipwreck",
    "tags": [
      "dreamclue",
      "shipwreck"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_053",
    "url": "https://picsum.photos/seed/dreamclue-beehive-53/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-beehive-53/400/600",
    "title": "Beehive",
    "tags": [
      "dreamclue",
      "beehive"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_054",
    "url": "https://picsum.photos/seed/dreamclue-mirror-54/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-mirror-54/400/600",
    "title": "Mirror",
    "tags": [
      "dreamclue",
      "mirror"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_055",
    "url": "https://picsum.photos/seed/dreamclue-jungle-55/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-jungle-55/400/600",
    "title": "Jungle",
    "tags": [
      "dreamclue",
      "jungle"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_056",
    "url": "https://picsum.photos/seed/dreamclue-snowfall-56/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-snowfall-56/400/600",
    "title": "Snowfall",
    "tags": [
      "dreamclue",
      "snowfall"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_057",
    "url": "https://picsum.photos/seed/dreamclue-cathedral-57/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-cathedral-57/400/600",
    "title": "Cathedral",
    "tags": [
      "dreamclue",
      "cathedral"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_058",
    "url": "https://picsum.photos/seed/dreamclue-seashell-58/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-seashell-58/400/600",
    "title": "Seashell",
    "tags": [
      "dreamclue",
      "seashell"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_059",
    "url": "https://picsum.photos/seed/dreamclue-bonfire-59/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-bonfire-59/400/600",
    "title": "Bonfire",
    "tags": [
      "dreamclue",
      "bonfire"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_060",
    "url": "https://picsum.photos/seed/dreamclue-staircase-60/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-staircase-60/400/600",
    "title": "Staircase",
    "tags": [
      "dreamclue",
      "staircase"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_061",
    "url": "https://picsum.photos/seed/dreamclue-raincoat-61/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-raincoat-61/400/600",
    "title": "Raincoat",
    "tags": [
      "dreamclue",
      "raincoat"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_062",
    "url": "https://picsum.photos/seed/dreamclue-telescope-62/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-telescope-62/400/600",
    "title": "Telescope",
    "tags": [
      "dreamclue",
      "telescope"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_063",
    "url": "https://picsum.photos/seed/dreamclue-vineyard-63/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-vineyard-63/400/600",
    "title": "Vineyard",
    "tags": [
      "dreamclue",
      "vineyard"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_064",
    "url": "https://picsum.photos/seed/dreamclue-cactus-64/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-cactus-64/400/600",
    "title": "Cactus",
    "tags": [
      "dreamclue",
      "cactus"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_065",
    "url": "https://picsum.photos/seed/dreamclue-carnival-65/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-carnival-65/400/600",
    "title": "Carnival",
    "tags": [
      "dreamclue",
      "carnival"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_066",
    "url": "https://picsum.photos/seed/dreamclue-harp-66/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-harp-66/400/600",
    "title": "Harp",
    "tags": [
      "dreamclue",
      "harp"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_067",
    "url": "https://picsum.photos/seed/dreamclue-cliff-67/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-cliff-67/400/600",
    "title": "Cliff",
    "tags": [
      "dreamclue",
      "cliff"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_068",
    "url": "https://picsum.photos/seed/dreamclue-meteor-68/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-meteor-68/400/600",
    "title": "Meteor",
    "tags": [
      "dreamclue",
      "meteor"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_069",
    "url": "https://picsum.photos/seed/dreamclue-umbrella-69/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-umbrella-69/400/600",
    "title": "Umbrella",
    "tags": [
      "dreamclue",
      "umbrella"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_070",
    "url": "https://picsum.photos/seed/dreamclue-deer-70/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-deer-70/400/600",
    "title": "Deer",
    "tags": [
      "dreamclue",
      "deer"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_071",
    "url": "https://picsum.photos/seed/dreamclue-pier-71/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-pier-71/400/600",
    "title": "Pier",
    "tags": [
      "dreamclue",
      "pier"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_072",
    "url": "https://picsum.photos/seed/dreamclue-tundra-72/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-tundra-72/400/600",
    "title": "Tundra",
    "tags": [
      "dreamclue",
      "tundra"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_073",
    "url": "https://picsum.photos/seed/dreamclue-greenhouse-73/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-greenhouse-73/400/600",
    "title": "Greenhouse",
    "tags": [
      "dreamclue",
      "greenhouse"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_074",
    "url": "https://picsum.photos/seed/dreamclue-anchor-74/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-anchor-74/400/600",
    "title": "Anchor",
    "tags": [
      "dreamclue",
      "anchor"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_075",
    "url": "https://picsum.photos/seed/dreamclue-moon-75/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-moon-75/400/600",
    "title": "Moon",
    "tags": [
      "dreamclue",
      "moon"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_076",
    "url": "https://picsum.photos/seed/dreamclue-riverboat-76/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-riverboat-76/400/600",
    "title": "Riverboat",
    "tags": [
      "dreamclue",
      "riverboat"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_077",
    "url": "https://picsum.photos/seed/dreamclue-festival-77/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-festival-77/400/600",
    "title": "Festival",
    "tags": [
      "dreamclue",
      "festival"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_078",
    "url": "https://picsum.photos/seed/dreamclue-pinwheel-78/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-pinwheel-78/400/600",
    "title": "Pinwheel",
    "tags": [
      "dreamclue",
      "pinwheel"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_079",
    "url": "https://picsum.photos/seed/dreamclue-oasis-79/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-oasis-79/400/600",
    "title": "Oasis",
    "tags": [
      "dreamclue",
      "oasis"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_080",
    "url": "https://picsum.photos/seed/dreamclue-chandelier-80/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-chandelier-80/400/600",
    "title": "Chandelier",
    "tags": [
      "dreamclue",
      "chandelier"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_081",
    "url": "https://picsum.photos/seed/dreamclue-compass-81/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-compass-81/400/600",
    "title": "Compass",
    "tags": [
      "dreamclue",
      "compass"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_082",
    "url": "https://picsum.photos/seed/dreamclue-driftwood-82/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-driftwood-82/400/600",
    "title": "Driftwood",
    "tags": [
      "dreamclue",
      "driftwood"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_083",
    "url": "https://picsum.photos/seed/dreamclue-hummingbird-83/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-hummingbird-83/400/600",
    "title": "Hummingbird",
    "tags": [
      "dreamclue",
      "hummingbird"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_084",
    "url": "https://picsum.photos/seed/dreamclue-ferriswheel-84/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-ferriswheel-84/400/600",
    "title": "Ferriswheel",
    "tags": [
      "dreamclue",
      "ferriswheel"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_085",
    "url": "https://picsum.photos/seed/dreamclue-maze-85/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-maze-85/400/600",
    "title": "Maze",
    "tags": [
      "dreamclue",
      "maze"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_086",
    "url": "https://picsum.photos/seed/dreamclue-lagoon-86/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-lagoon-86/400/600",
    "title": "Lagoon",
    "tags": [
      "dreamclue",
      "lagoon"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_087",
    "url": "https://picsum.photos/seed/dreamclue-scarecrow-87/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-scarecrow-87/400/600",
    "title": "Scarecrow",
    "tags": [
      "dreamclue",
      "scarecrow"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_088",
    "url": "https://picsum.photos/seed/dreamclue-typewriter-88/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-typewriter-88/400/600",
    "title": "Typewriter",
    "tags": [
      "dreamclue",
      "typewriter"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_089",
    "url": "https://picsum.photos/seed/dreamclue-wisteria-89/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-wisteria-89/400/600",
    "title": "Wisteria",
    "tags": [
      "dreamclue",
      "wisteria"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_090",
    "url": "https://picsum.photos/seed/dreamclue-iceflower-90/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-iceflower-90/400/600",
    "title": "Iceflower",
    "tags": [
      "dreamclue",
      "iceflower"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_091",
    "url": "https://picsum.photos/seed/dreamclue-marble-91/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-marble-91/400/600",
    "title": "Marble",
    "tags": [
      "dreamclue",
      "marble"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_092",
    "url": "https://picsum.photos/seed/dreamclue-nightmarket-92/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-nightmarket-92/400/600",
    "title": "Nightmarket",
    "tags": [
      "dreamclue",
      "nightmarket"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_093",
    "url": "https://picsum.photos/seed/dreamclue-pagoda-93/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-pagoda-93/400/600",
    "title": "Pagoda",
    "tags": [
      "dreamclue",
      "pagoda"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_094",
    "url": "https://picsum.photos/seed/dreamclue-seagull-94/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-seagull-94/400/600",
    "title": "Seagull",
    "tags": [
      "dreamclue",
      "seagull"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_095",
    "url": "https://picsum.photos/seed/dreamclue-waterlily-95/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-waterlily-95/400/600",
    "title": "Waterlily",
    "tags": [
      "dreamclue",
      "waterlily"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_096",
    "url": "https://picsum.photos/seed/dreamclue-zeppelin-96/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-zeppelin-96/400/600",
    "title": "Zeppelin",
    "tags": [
      "dreamclue",
      "zeppelin"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_097",
    "url": "https://picsum.photos/seed/dreamclue-archway-97/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-archway-97/400/600",
    "title": "Archway",
    "tags": [
      "dreamclue",
      "archway"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_098",
    "url": "https://picsum.photos/seed/dreamclue-birdcage-98/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-birdcage-98/400/600",
    "title": "Birdcage",
    "tags": [
      "dreamclue",
      "birdcage"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_099",
    "url": "https://picsum.photos/seed/dreamclue-candle-99/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-candle-99/400/600",
    "title": "Candle",
    "tags": [
      "dreamclue",
      "candle"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_100",
    "url": "https://picsum.photos/seed/dreamclue-dandelion-100/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-dandelion-100/400/600",
    "title": "Dandelion",
    "tags": [
      "dreamclue",
      "dandelion"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_101",
    "url": "https://picsum.photos/seed/dreamclue-elephant-101/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-elephant-101/400/600",
    "title": "Elephant",
    "tags": [
      "dreamclue",
      "elephant"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_102",
    "url": "https://picsum.photos/seed/dreamclue-fjord-102/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-fjord-102/400/600",
    "title": "Fjord",
    "tags": [
      "dreamclue",
      "fjord"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_103",
    "url": "https://picsum.photos/seed/dreamclue-gondola-103/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-gondola-103/400/600",
    "title": "Gondola",
    "tags": [
      "dreamclue",
      "gondola"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_104",
    "url": "https://picsum.photos/seed/dreamclue-hourglass-104/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-hourglass-104/400/600",
    "title": "Hourglass",
    "tags": [
      "dreamclue",
      "hourglass"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_105",
    "url": "https://picsum.photos/seed/dreamclue-inkwell-105/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-inkwell-105/400/600",
    "title": "Inkwell",
    "tags": [
      "dreamclue",
      "inkwell"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_106",
    "url": "https://picsum.photos/seed/dreamclue-jellyfish-106/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-jellyfish-106/400/600",
    "title": "Jellyfish",
    "tags": [
      "dreamclue",
      "jellyfish"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_107",
    "url": "https://picsum.photos/seed/dreamclue-kaleidoscope-107/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-kaleidoscope-107/400/600",
    "title": "Kaleidoscope",
    "tags": [
      "dreamclue",
      "kaleidoscope"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_108",
    "url": "https://picsum.photos/seed/dreamclue-lark-108/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-lark-108/400/600",
    "title": "Lark",
    "tags": [
      "dreamclue",
      "lark"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_109",
    "url": "https://picsum.photos/seed/dreamclue-mushroom-109/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-mushroom-109/400/600",
    "title": "Mushroom",
    "tags": [
      "dreamclue",
      "mushroom"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_110",
    "url": "https://picsum.photos/seed/dreamclue-nautilus-110/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-nautilus-110/400/600",
    "title": "Nautilus",
    "tags": [
      "dreamclue",
      "nautilus"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_111",
    "url": "https://picsum.photos/seed/dreamclue-origamibird-111/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-origamibird-111/400/600",
    "title": "Origamibird",
    "tags": [
      "dreamclue",
      "origamibird"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_112",
    "url": "https://picsum.photos/seed/dreamclue-parasol-112/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-parasol-112/400/600",
    "title": "Parasol",
    "tags": [
      "dreamclue",
      "parasol"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_113",
    "url": "https://picsum.photos/seed/dreamclue-quartz-113/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-quartz-113/400/600",
    "title": "Quartz",
    "tags": [
      "dreamclue",
      "quartz"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_114",
    "url": "https://picsum.photos/seed/dreamclue-raven-114/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-raven-114/400/600",
    "title": "Raven",
    "tags": [
      "dreamclue",
      "raven"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_115",
    "url": "https://picsum.photos/seed/dreamclue-stardust-115/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-stardust-115/400/600",
    "title": "Stardust",
    "tags": [
      "dreamclue",
      "stardust"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_116",
    "url": "https://picsum.photos/seed/dreamclue-thistle-116/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-thistle-116/400/600",
    "title": "Thistle",
    "tags": [
      "dreamclue",
      "thistle"
    ],
    "category": "nature",
    "provider": "curated"
  },
  {
    "id": "card_117",
    "url": "https://picsum.photos/seed/dreamclue-umbra-117/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-umbra-117/400/600",
    "title": "Umbra",
    "tags": [
      "dreamclue",
      "umbra"
    ],
    "category": "wonder",
    "provider": "curated"
  },
  {
    "id": "card_118",
    "url": "https://picsum.photos/seed/dreamclue-velvet-118/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-velvet-118/400/600",
    "title": "Velvet",
    "tags": [
      "dreamclue",
      "velvet"
    ],
    "category": "journey",
    "provider": "curated"
  },
  {
    "id": "card_119",
    "url": "https://picsum.photos/seed/dreamclue-willow-119/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-willow-119/400/600",
    "title": "Willow",
    "tags": [
      "dreamclue",
      "willow"
    ],
    "category": "fantasy",
    "provider": "curated"
  },
  {
    "id": "card_120",
    "url": "https://picsum.photos/seed/dreamclue-xylophone-120/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-xylophone-120/400/600",
    "title": "Xylophone",
    "tags": [
      "dreamclue",
      "xylophone"
    ],
    "category": "everyday",
    "provider": "curated"
  },
  {
    "id": "card_121",
    "url": "https://picsum.photos/seed/dreamclue-yarn-121/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-yarn-121/400/600",
    "title": "Yarn",
    "tags": [
      "dreamclue",
      "yarn"
    ],
    "category": "dream",
    "provider": "curated"
  },
  {
    "id": "card_122",
    "url": "https://picsum.photos/seed/dreamclue-zephyr-122/800/1200",
    "thumbnailUrl": "https://picsum.photos/seed/dreamclue-zephyr-122/400/600",
    "title": "Zephyr",
    "tags": [
      "dreamclue",
      "zephyr"
    ],
    "category": "nature",
    "provider": "curated"
  }
];
