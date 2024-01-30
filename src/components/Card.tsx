import { Character, ViewType, VoteType } from '../types/types';
import VotingSection from './VotingSection';
import Percentage from './Percentage';
import CardInformation from './CardInformation';
import '../styles/listCard.scss';
import '../styles/gridCard.scss';

interface Props {
  character: Character;
  viewMode: ViewType;
  onVote: (_voteType: VoteType) => void;
}

const buildBackground = (picture: string, viewMode: ViewType) => {
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

const Card = ({ character, viewMode, onVote }: Props) => {
  return (
    <div className="card" style={buildBackground(character.picture, viewMode)}>
      <CardInformation name={character.name} description={character.description} votes={character.votes} />
      <VotingSection lastUpdate={character.lastUpdated} category={character.category} onVote={onVote} />
      <Percentage votes={character.votes} />
    </div>
  );
};

export default Card;
