import { Character, ViewType, VoteType } from '../types/types';
import { data } from '../assets/data.json';

export const calculatePercentages = (positiveVotes: number, negativeVotes: number) => {
  const totalVotes = positiveVotes + negativeVotes;

  const positivePercentage = (positiveVotes / totalVotes) * 100;
  const negativePercentage = (negativeVotes / totalVotes) * 100;

  return {
    positive: positivePercentage.toFixed(1),
    negative: negativePercentage.toFixed(1),
  };
};

export const updateCharacters = (characters: Character[], characterIndex: number, voteType: VoteType) => {
  const updatedCharacters = [...characters];
  const characterToUpdate = updatedCharacters[characterIndex];

  if (voteType === 'positive') {
    characterToUpdate.votes.positive += 1;
    return updatedCharacters;
  }

  characterToUpdate.votes.negative += 1;
  return updatedCharacters;
};

export const getData = () => {
  const charactersJSON = localStorage.getItem('characters');

  if (!charactersJSON) return data;

  const charactersFromStorage = JSON.parse(charactersJSON);

  return charactersFromStorage;
};

export const buildBackground = (picture: string, viewMode: ViewType) => {
  if (viewMode === 'list')
    return {
      background: `linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 5%, #888888 22.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%),
      url('src/assets/img/${picture}.png') left center / contain`,
      backgroundRepeat: 'no-repeat',
    };

  return {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%),
    url('src/assets/img/${picture}@2x.png') center center / cover`,
  };
};
