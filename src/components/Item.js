import { Link } from 'react-router-dom'

const categorias = ["Remera", "Short", "Otros"]

export default function Item({ item }) {
    return (
        <div className="p-3 justify-content-center align-items-center" style={{ maxWidth: "70%" }}>
            <h4 className="p-3 mb-2 bg-dark text-white text-uppercase text-center">{item.title}</h4>
            <div className="card">
                <img className="card-img-top" src={item.url} alt={item.title} />
                <div className="card-body">
                    <p className="card-text">
                        <ul className="list-group list-group-flush" id="descripcion0">
                            <li className="list-group-item">
                                <h4 className="text-center">${item.price}</h4>
                            </li>
                            <li className="list-group-item"> Categoría: {categorias[item.category - 1]}</li>
                            <li className="list-group-item"> {item.description}</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

// <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={item.url} />
//             <Card.Body>
//                 <Card.Title>{item.title}</Card.Title>
//                 <Card.Text>
//                     {item.description}
//                     <br></br>
//                     Categoría: {categorias[item.category - 1]}
//                 </Card.Text>
//                 <Card.Footer>
//                     ${item.price}
//                 </Card.Footer>
//             </Card.Body>
//         </Card>