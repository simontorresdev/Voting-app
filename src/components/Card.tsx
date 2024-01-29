import { Character } from '../types/types';
import '../styles/card.scss';
import VotingSection from './VotingSection';
import Percentage from './Percentage';
import CardInformation from './CardInformation';

interface Props {
  character: Character;
}

const buildBackground = (picture: string) => ({
  background: `linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 5%, #888888 22.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%),
    url('src/assets/img/${picture}') left / 24% 100%`,
  backgroundRepeat: 'no-repeat',
});

const Card = ({ character }: Props) => {
  return (
    <div className="card" style={buildBackground(character.picture)}>
      <CardInformation name={character.name} description={character.description} votes={character.votes} />
      <VotingSection lastUpdate={character.lastUpdated} category={character.category} />
      <Percentage votes={character.votes} />
    </div>
  );
};

export default Card;
