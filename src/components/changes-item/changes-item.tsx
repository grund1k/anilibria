import { Title } from '../../types/title';

type Props = {
  title: Title
};

const ChangesItem = ({title} : Props): JSX.Element => {
  const poster = title.posters.original.url;

  return(
    <a href={`/${title.id}`}>
      <img src={`http://de3.libria.fun${poster}`} alt={title.names.ru} />
      <h2>{title.names.ru}</h2>
      <p>{title.announce}</p>
    </a>
  );
};

export default ChangesItem;
