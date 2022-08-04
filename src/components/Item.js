import Card from 'react-bootstrap/Card'

export default function Item(item) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.url} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Card.Footer>
                    {item.price}
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}