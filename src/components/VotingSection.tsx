import { generateTimeAgo } from '../helpers/time';
import Thumbs from './Thumbs';

interface Props {
  lastUpdate: string;
  category: string;
}

const VotingSection = ({ lastUpdate, category }: Props) => {
  return (
    <div className="voting-section">
      <h5 className="voting-last-update">
        {generateTimeAgo(lastUpdate)} in <span>{category}</span>
      </h5>
      <div className="voting-buttons">
        <Thumbs />
        <Thumbs up={false} />
        <button className="voting-button">Vote Now</button>
      </div>
    </div>
  );
};

export default VotingSection;
