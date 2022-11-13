import ChangesList from '../../components/changes-list/changes-list';
import Container from '../../components/container/container';
import Header from '../../components/header/header';
import ScheduleList from '../../components/schedule-list/schedule-list';
import Wrapper from '../../components/wrapper/wrapper';

const Schedule = (): JSX.Element => (
  <>
    <Header />
    <Container>
      <Wrapper>
        <>
          <ScheduleList />
          <ChangesList />
        </>
      </Wrapper>
    </Container>
  </>
);

export default Schedule;
