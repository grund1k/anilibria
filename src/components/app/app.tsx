import { Routes, Route } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import Schedule from '../../pages/schedule/schedule';
import HistoryRouter from '../history-route/history-route';
import './style.scss';

const App = (): JSX.Element => (
  <HistoryRouter history={browserHistory}>
    <div className="wrapper">
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}/>
        <Route path={AppRoute.Schedule} element={<Schedule />} />
      </Routes>
    </div>
  </HistoryRouter>
);

export default App;
