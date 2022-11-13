import browserHistory from '../../browser-history';
import ChangesList from '../changes-list/changes-list';
import Header from '../header/header';
import HistoryRouter from '../history-route/history-route';
import YouTubeList from '../youtube-list/youtube-list';
import './style.scss';

const App = (): JSX.Element => (
  <HistoryRouter history={browserHistory}>
    <div className="wrapper">
      <Header />
      <YouTubeList />
      <ChangesList />
    </div>
  </HistoryRouter>
);

export default App;
