const List = ({obj, dltbtn}) => {
    return obj.map(item => <div><p key={item.name}>{item.name} {item.number}</p><button onClick={dltbtn}>delete</button></div>)
}
export default List