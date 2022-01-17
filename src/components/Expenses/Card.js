import './Card.css'

const Card = (props) => {
    const cls_Name= 'card '+props.className;
    return <div className={cls_Name}>{props.children}</div>
}

export default Card;