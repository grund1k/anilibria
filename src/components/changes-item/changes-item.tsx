import { Title } from '../../types/title';
import { POSTERS_URL } from './../../const';
import styles from './changes-item.module.scss';

type Props = {
  title: Title
};

const ChangesItem = ({title} : Props): JSX.Element => {
  const poster = title.posters.original.url;

  return(
    <a className={styles.link} href={`/${title.id}`}>
      <img className={styles.img} src={`${POSTERS_URL}${poster}`} alt={title.names.ru} />
      <div className={styles.wrapper}>
        <h2>{title.names.ru}</h2>
        <p className={styles.text}>{title.description}</p>
      </div>
    </a>
  );
};

export default ChangesItem;
