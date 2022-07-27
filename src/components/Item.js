export default function Item(item) {
    console.log(item)
    return (<div>
        Nombre:{item.title}
        Precio:{item.price}
    </div>)
}