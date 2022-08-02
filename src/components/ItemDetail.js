export default function ItemDetail({ item }) {
    return (
        <>
            <div>
                <img src={item.url} />
                <ul>
                    <li>{item.title}</li>
                    <li>{item.description}</li>
                    <li>{item.price}</li>
                </ul>
            </div>
        </>
    )
}