import './style.scss';
import { useGetYouTubeVideos } from '../../store/youtube/selector';
import VideoLink from '../youtube-video/youtube-video';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchYouTubeVideos } from '../../store/api-actions';

const YouTubeList = (): JSX.Element => {
  const videos = useGetYouTubeVideos();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchYouTubeVideos(15));
  }, [dispatch]);

  const filteredVideos = videos.filter((item) => item.views && item.comments > 0);

  return(
    <ul className='videos-list'>
      {filteredVideos.slice(0, 10).map((item) => (
        <li className='video-list__item' key={item.id}>
          <VideoLink video={item} />
        </li>
      ))}
    </ul>
  );
};

export default YouTubeList;
