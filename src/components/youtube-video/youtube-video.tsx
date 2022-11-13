import {YouTubeVideo} from '../../types/youtube';
import {YOUTUBE_LINK} from '../../const';
import styles from './youtube-video.module.scss';

type Props = {
  video: YouTubeVideo
}

const VideoLink = ({video}: Props):JSX.Element => (
  <a className={styles.link} href={`${YOUTUBE_LINK}${video.youtube_id}`} rel="noreferrer" target="_blank">
    <img className={styles.img} src={video.image} alt={video.title} width='436' height='245'></img>
  </a>
);

export default VideoLink;

