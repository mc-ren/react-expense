import './Card.css';

function Card(props) {
    // children is whatever is inside of your custom element.
    // you need to set className on your custom tags;
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
// props children is used when making rapper components.

export default Card;

// reusability components. 