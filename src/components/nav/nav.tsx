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
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item) => (
          <li className="nav__item" key={item.id}>
            <a className="nav__link" href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
