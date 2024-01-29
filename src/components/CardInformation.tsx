import { Vote } from '../types/types';
import Thumbs from './Thumbs';

interface Props {
  name: string;
  description: string;
  votes: Vote;
}

const CardInformation = ({ name, description, votes }: Props) => {
  return (
    <div className="card-information">
      <div className="thumbs-result">
        <Thumbs up={votes.positive > votes.negative} />
      </div>
      <div className="card-text">
        <h3 className="card-tittle">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardInformation;
