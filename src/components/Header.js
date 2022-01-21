const Header = ({ title, icon, numberOfReminders }) => {
  return (
    <header>
      <span style={numberOfReminders ? { color: "#f28ab2" } : null}>
        {icon}
      </span>
      <h1 className="title">{title}</h1>
    </header>
  );
};

export default Header;
