import { Platform, Rating } from './types';

export const mockGameDetails = {
  developer: 'CD Project Red',
  releaseDate: '2020-12-21T23:00:00',
  platforms: ['mac', 'linux', 'windows'] as Platform[],
  publisher: 'CD Project Red',
  rating: 'BR0' as Rating,
  genres: ['Role-playing', 'Action']
};
