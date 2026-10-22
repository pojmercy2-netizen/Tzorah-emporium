import { d as defineEventHandler } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const collections_get = defineEventHandler(() => {
  return [
    {
      id: "scents",
      name: "The Perfume Sanctuary",
      description: "Imported USA concentrated oils, Arabian attars, and authentic designer fragrances.",
      image: "/images/or_hero.png",
      count: 11
    },
    {
      id: "oils",
      name: "The Oils Alchemy Bar",
      description: "Fragrance oils, pure therapeutic essential oils, and cold-pressed botanical carrier oils.",
      image: "/images/or_oils.png",
      count: 6
    },
    {
      id: "candles",
      name: "Artisan Candle Studio",
      description: "Premium soy waxes, beeswax, wicks, fragrance loads, and craft vessels.",
      image: "/images/products/candle_1.png",
      count: 3
    },
    {
      id: "unscented",
      name: "Gentle & Unscented Care",
      description: "Fragrance-free raw butters, hypoallergenic moisturizers, and gentle formulas.",
      image: "/images/products/unscented_1.png",
      count: 2
    },
    {
      id: "pets",
      name: "Pet Wellness & Grooming",
      description: "Nourishing paw balms and soothing coat washes formulated with botanical care.",
      image: "/images/products/pet_1.png",
      count: 2
    },
    {
      id: "adult",
      name: "Private Intimate Boudoir (18+)",
      description: "Discreet luxury intimate wellness massagers and fine Mulberry silk lingerie.",
      image: "/images/or_adult.png",
      count: 4
    }
  ];
});

export { collections_get as default };
//# sourceMappingURL=collections.get.mjs.map
