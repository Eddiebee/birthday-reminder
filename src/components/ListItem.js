export const ListItem = ({ item, badge }) => {
  const { name, age, image } = item;
  return (
    <li className="celebrant">
      <img src={image} alt={name + "'s image"} className="image" />
      <div>
        <h2 className="name">{name}</h2>
        <p className="age">{age} years</p>
      </div>
      {/* <span className="badge">{badge}</span> */}
    </li>
  );
};
