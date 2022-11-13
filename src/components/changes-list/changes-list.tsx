import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchChanges } from '../../store/api-actions';
import { useGetChanges } from '../../store/changes/selector';
import ChangesItem from '../changes-item/changes-item';

const ChangesList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(fetchChanges(10));
  }, [dispatch]);

  const changes = useGetChanges();

  return(
    <aside>
      <ul>
        {changes.map((item) => (
          <li key={item.id}>
            <ChangesItem title={item} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ChangesList;
