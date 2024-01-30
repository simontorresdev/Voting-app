import { Character, VoteType } from '../types/types';
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
