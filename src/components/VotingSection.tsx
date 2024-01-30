import { useState } from 'react';
import { VoteType } from '../types/types';
import VotingMessage from './VotingMessage';
import VotingButtons from './VotingButtons';

interface Props {
  lastUpdate: string;
  category: string;
  onVote: (_voteType: VoteType) => void;
}

const VotingSection = ({ lastUpdate, category, onVote }: Props) => {
  const [vote, setVote] = useState<VoteType>(null);
  const [alreadyVote, setAlreadyVote] = useState<boolean>(false);

  const handleVote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAlreadyVote(true);
    onVote(vote);
  };

  const resetVote = () => {
    setAlreadyVote(false);
    setVote(null);
  };

  return (
    <div className="voting-section">
      <VotingMessage lastUpdate={lastUpdate} category={category} alreadyVote={alreadyVote} />
      <VotingButtons
        vote={vote}
        setVote={setVote}
        handleVote={handleVote}
        alreadyVote={alreadyVote}
        resetVote={resetVote}
      />
    </div>
  );
};

export default VotingSection;
