import ItemCount from "./ItemCount"
function ItemListContainer(props) {
    return (<div>
        {props.greeting}
        <ItemCount stock={10} initial={1} />
    </div >)
}


export default ItemListContainer