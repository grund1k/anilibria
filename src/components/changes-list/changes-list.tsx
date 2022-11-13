import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchChanges } from '../../store/api-actions';
import { useGetChanges } from '../../store/changes/selector';
import ChangesItem from '../changes-item/changes-item';
import styles from './changes-list.module.scss';

const ChangesList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(fetchChanges(5));
  }, [dispatch]);

  const changes = useGetChanges();

  return(
    <aside className={styles.aside}>
      <ul className={styles.list}>
        {changes.map((item) => (
          <li className={styles.item} key={item.id}>
            <ChangesItem title={item} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ChangesList;
