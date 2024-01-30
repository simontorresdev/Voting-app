import { Character, ViewType, VoteType } from '../types/types';
import VotingSection from './VotingSection';
import Percentage from './Percentage';
import CardInformation from './CardInformation';
import '../styles/listCard.scss';
import '../styles/gridCard.scss';
import { buildBackground } from '../helpers/helpers';

interface Props {
  character: Character;
  viewMode: ViewType;
  onVote: (_voteType: VoteType) => void;
}

const Card = ({ character, viewMode, onVote }: Props) => {
  const styles = buildBackground(character.picture, viewMode);

  return (
    <div className="card" style={styles}>
      <CardInformation name={character.name} description={character.description} votes={character.votes} />
      <VotingSection lastUpdate={character.lastUpdated} category={character.category} onVote={onVote} />
      <Percentage votes={character.votes} />
    </div>
  );
};

export default Card;
