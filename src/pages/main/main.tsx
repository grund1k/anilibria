import ChangesList from '../../components/changes-list/changes-list';
import Header from '../../components/header/header';
import YouTubeList from '../../components/youtube-list/youtube-list';
import Container from './../../components/container/container';
import styles from './main.module.scss';

const Main = (): JSX.Element => (
  <>
    <Header />
    <Container>
      <div className={styles.wrapper}>
        <YouTubeList />
        <ChangesList />
      </div>
    </Container>
  </>
);

export default Main;
