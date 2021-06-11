//This is a wrapper component, used for wrapping contents.
//Advantages are : Reduces repeation of code.
import "./Card.css";
const Card = (props) => {
  //the following syntax is important.After card in inverted comma there is a whitespace
  const classes = "card " + props.className;
  return (
    <div className={classes}>
      {/*The following line will display all the contents of its children components.*/}
      {props.children}
    </div>
  );
};

export default Card;
