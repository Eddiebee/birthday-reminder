export const ListItem = ({ item, badge }) => {
  const { name, age, image } = item;
  return (
    <li className="user">
      <img src={image} alt={name + "'s image"} className="image" />
      <div>
        <h2 className="name">{name}</h2>
        <p className="age">{age}</p>
      </div>
      <span className="badge">{badge}</span>
    </li>
  );
};
