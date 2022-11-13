import styles from './wrapper.module.scss';

type Props = {
  children: JSX.Element
}

const Wrapper = ({children} : Props):JSX.Element => (<div className={styles.wrapper}>{children}</div>);

export default Wrapper;
