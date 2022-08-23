import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useCart } from './CartContext';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import Resumen from './Resumen';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function BuyForm() {
    const { cart, totalCart, clear } = useCart()
    const [orderId, setOrderId] = useState("")

    // const buyerData = (e) => {
    //     setBuyer({
    //         ...buyer
    //         [e.target.name]: e.target.value
    //     })
    // }

    const comprar = (e) => {
        e.preventDefault()
        const name = document.getElementById("nombre").value
        const phone = document.getElementById("telefono").value
        const email = document.getElementById("email").value
        console.log(name, phone, email)
        if ((name || phone || email) === "") {
            return console.log("Debe llenar todos los campos")
        }
        const newOrder = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: cart,
            date: serverTimestamp(),
            total: totalCart()
        }
        const db = getFirestore()

        const ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, newOrder)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            {orderId === "" ?
                <Form>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Ingrese su nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control placeholder="Ingrese su telefono" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" />
                    </Form.Group>

                    <Form.Text>
                        <Resumen cart={cart} total={totalCart()} />
                    </Form.Text>

                    <Button onClick={comprar} variant="primary">
                        Comprar
                    </Button>
                    <Link to="/cart"><Button variant="primary" >
                        Volver al carrito
                    </Button></Link>
                </Form>
                :
                <div>
                    <h2>Gracias por su compra!</h2>
                    <h3>Orden N° {orderId}</h3>
                    <Link to="/"><button>Volver a página principal</button></Link>
                </div>
            }
        </>
    )
}