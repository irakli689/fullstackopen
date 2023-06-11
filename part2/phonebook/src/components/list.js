const List = ({item, dlt}) => {
    return (
        <div>
            <li key={item.name}>{item.name} {item.number}</li>
            <button onClick={dlt}>delete</button>
        </div>
    ) 
}
export default List