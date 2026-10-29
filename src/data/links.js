// Every external URL and the contact email live here.
// Placeholders that are not valid URLs render as disabled buttons.

export const email = 'kavinilam02@gmail.com';

export const links = {
  github: 'https://github.com/KavinilaM02',
  linkedin: 'https://www.linkedin.com/in/kavinila-m-0a38a6320',
  resume: '/resume.pdf', // File should exist at public/resume.pdf

  hireflow: {
    github: 'https://github.com/kavinila290/HireFlow',
    live: 'https://hireflow-frontend.kavinilam67.workers.dev/',
  },

  buildwise: {
    github: 'https://github.com/kavinila290/BuildWiseAI',
    live: 'https://build-wise-ai-two.vercel.app/',
  },

  neuralSec: {
    github: 'https://github.com/kavinila290/NeuralSec',
  },

  cinematic: {
    github: 'https://github.com/kavinila290/Cinematic-scene-generator',
  },
};

export const isLink = (url = '') =>
  /^(https?:\/\/|mailto:|\/|#)/.test(url);

export const mailto = (address = '') =>
  address.includes('@') ? `mailto:${address}` : '';