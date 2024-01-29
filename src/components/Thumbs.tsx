import ThumbsUp from '../assets/img/thumbs-up.svg';
import '../styles/thumbs.scss';

interface Props {
  up?: boolean;
}

const Thumbs = ({ up = true }: Props) => {
  return <img className={`thumbs ${!up && 'thumbs-down'}`} src={ThumbsUp} alt="Thumbs" />;
};

export default Thumbs;
