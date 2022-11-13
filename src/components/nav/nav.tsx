import Container from '../container/container';
import styles from './nav.module.scss';

const Nav = () => {
  const navItems = [
    {
      id: '0',
      text: 'Главная',
      href: '#'
    },
    {
      id: '1',
      text: 'Релизы',
      href: '#'
    },
    {
      id: '2',
      text: 'Расписани',
      href: '#'
    },
    {
      id: '3',
      text: 'Приложение',
      href: '#'
    },
    {
      id: '4',
      text: 'Команда',
      href: '#'
    },
    {
      id: '5',
      text: 'Поддержка проекта',
      href: '#'
    }
  ];

  return (
    <nav className={styles.nav}>
      <Container>
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li className={styles.item} key={item.id}>
              <a className={styles.link} href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
