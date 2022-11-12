import browserHistory from '../../browser-history';
import Header from '../header/header';
import HistoryRouter from '../history-route/history-route';
import YouTubeList from '../youtube-list/youtube-list';
import './style.scss';

const App = (): JSX.Element => (
  <HistoryRouter history={browserHistory}>
    <div className="wrapper">
      <Header />
      <YouTubeList />
    </div>
  </HistoryRouter>
);

export default App;
