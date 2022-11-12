import {useState, useLayoutEffect} from 'react';
import {Router} from 'react-router-dom';
import type {BrowserHistory} from 'history';

export interface HistoryRouterProps {
  history: BrowserHistory
  basename?: string
  children?: React.ReactNode
}

const HistoryRouter = ({ history, basename, children }: HistoryRouterProps): JSX.Element => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export default HistoryRouter;
