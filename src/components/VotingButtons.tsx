import { VoteType } from '../types/types';
import Thumbs from './Thumbs';

interface Props {
  setVote: React.Dispatch<React.SetStateAction<VoteType>>;
  vote: VoteType;
  handleVote: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  alreadyVote: boolean;
  resetVote: () => void;
}

const VotingButtons = ({ setVote, vote, handleVote, alreadyVote, resetVote }: Props) => {
  return (
    <form className="voting-buttons">
      {!alreadyVote && (
        <>
          <label onClick={() => setVote('positive')}>
            <input type="radio" name="election" value="positive" />
            <Thumbs />
          </label>
          <label onClick={() => setVote('negative')}>
            <input type="radio" name="election" value="negative" />
            <Thumbs up={false} />
          </label>
        </>
      )}
      {alreadyVote ? (
        <button className="voting-button" disabled={vote === null} type="submit" onClick={resetVote}>
          Vote Again
        </button>
      ) : (
        <button className="voting-button" disabled={vote === null} type="submit" onClick={handleVote}>
          Vote Now
        </button>
      )}
    </form>
  );
};

export default VotingButtons;
