import { useState } from 'react';
import Card from './Card';
import { Character, ViewType, VoteType } from '../types/types';
import '../styles/cards.scss';
import { updateCharacters } from '../helpers/helpers';

interface Props {
  viewMode: ViewType;
  data: any;
}

const CardsSection = ({ viewMode, data }: Props) => {
  const [characters, setCharacters] = useState<Character[]>(data);

  const handleVote = (characterIndex: number, voteType: VoteType) => {
    const updatedCharacters = updateCharacters(characters, characterIndex, voteType);
    localStorage.setItem('characters', JSON.stringify(updatedCharacters));
    setCharacters(updatedCharacters);
  };

  return (
    <div className={viewMode === 'grid' ? 'cards-grid' : 'cards-list'}>
      {characters.map((character, index) => (
        <Card
          key={index}
          character={character}
          viewMode={viewMode}
          onVote={(voteType: VoteType) => handleVote(index, voteType)}
        />
      ))}
    </div>
  );
};

export default CardsSection;
