import { useState } from 'react';
import { data } from '../assets/data.json';
import Card from './Card';
import { Character } from '../types/types';

const CardsSection = () => {
  const [characters, setcharacters] = useState<Character[]>(data);

  return (
    <div>
      {characters.map((character, index) => (
        <Card key={index} character={character} />
      ))}
    </div>
  );
};

export default CardsSection;
