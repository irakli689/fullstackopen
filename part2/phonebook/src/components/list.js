const List = ({obj, filter}) => {
    return obj
                
                .map(item => <p key={item.name}>{item.name} {item.number}</p>)
}
export default List