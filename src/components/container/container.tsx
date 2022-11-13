import styles from './container.module.scss';

type Props = {
  children: JSX.Element
}

const Container = ({children} : Props): JSX.Element => (<div className={styles.container}>{children}</div>);

export default Container;
