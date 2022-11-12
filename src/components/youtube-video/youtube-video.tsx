import {YouTubeVideo} from '../../types/youtube';
import {YOUTUBE_LINK} from '../../const';

type Props = {
  video: YouTubeVideo
}

const VideoLink = ({video}: Props):JSX.Element => (
  <a className='youtube-link' href={`${YOUTUBE_LINK}${video.youtube_id}`}>
    <img src={video.image} alt={video.title} width='436' height='245'></img>
  </a>
);

export default VideoLink;

