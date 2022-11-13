import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchShedule } from '../../store/api-actions';
import { useGetSchedule } from '../../store/schedule/selector';
import Poster from '../poster/poster';

const ScheduleList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShedule());
  }, [dispatch]);

  const data = useGetSchedule();

  return (
    <div>
      <h1>РАСПИСАНИЕ ВЫХОДА СЕРИЙ В ОЗВУЧКЕ АНИЛИБРИИ*</h1>
      <p>*новые серии выходят в этот день недели +-1 день. В начале сезона расписание может не соответствовать действительности. Если серии задерживаются — это будет указано в статусе релиза (над постером).</p>

      <ul>
        {data.map((day) => (
          <li key={day.day}>
            <h3>{day.day}</h3> {/*сделать функцию дней*/}
            <ul>
              {day.list.map((poster) => (
                <li key={poster.id}>
                  <Poster title={poster}/>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
