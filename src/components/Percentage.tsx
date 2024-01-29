import { calculatePercentages } from '../helpers/helpers';
import ThumbsUp from '../assets/img/thumbs-up.svg';
import ThumbsDown from '../assets/img/thumbs-down.svg';
import { Vote } from '../types/types';

interface Props {
  votes: Vote;
}

const Percentage = ({ votes }: Props) => {
  const percentages = calculatePercentages(votes.positive, votes.negative);

  return (
    <div className="percentages">
      <div className="percentages-negative" style={{ width: `${percentages.positive}%` }}>
        <img src={ThumbsUp} alt="Thumbs up" />
        <p>{percentages.positive} %</p>
      </div>
      <div className="percentages-positive" style={{ width: `${percentages.negative}%` }}>
        <p>{percentages.negative} %</p>
        <img src={ThumbsDown} alt="Thumbs down" />
      </div>
    </div>
  );
};

export default Percentage;
