import Card from 'react-bootstrap/Card'

const categorias = ["Remera", "Short", "Otros"]

export default function Item({ item }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.url} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}

                    Categoría: {categorias[item.category - 1]}
                </Card.Text>
                <Card.Footer>
                    {item.price}
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}