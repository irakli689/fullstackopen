const List = ({item, onDelete}) => {
    return (
        <li>
            {item.name} {item.number}
            <button onClick={onDelete}>delete</button>
        </li>
    )
}
export default List