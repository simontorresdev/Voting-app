import { generateTimeAgo } from '../helpers/time';

interface Props {
  alreadyVote: boolean;
  lastUpdate: string;
  category: string;
}

const VotingMessage = ({ alreadyVote, lastUpdate, category }: Props) => {
  const timeAgo = generateTimeAgo(lastUpdate);

  if (alreadyVote) return <h5 className="voting-last-update">Thank you for your vote!</h5>;

  return (
    <h5 className="voting-last-update">
      {timeAgo} in <span>{category}</span>
    </h5>
  );
};

export default VotingMessage;
