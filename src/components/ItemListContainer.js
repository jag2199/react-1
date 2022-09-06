import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB-8MKWWwFtyQkXb6rgySjqodaPSnvMWOs",
    authDomain: "react-1-a3a46.firebaseapp.com",
    projectId: "react-1-a3a46",
    storageBucket: "react-1-a3a46.appspot.com",
    messagingSenderId: "224857282557",
    appId: "1:224857282557:web:6520b280becd19fd7f2b94"
};

initializeApp(firebaseConfig);
console.log("Firebase OK")

const db = getFirestore()

function ItemListContainer(props) {
    const [items, setItems] = useState([])
    const { idCat } = useParams()

    useEffect(() => {
        if (!idCat) {
            const itemCollection = collection(db, "itemCollection")
            getDocs(itemCollection)
                .then((rawItems) => {
                    const data = rawItems.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    setItems(data)
                })
        } else {
            const filteredCollection = query(collection(db, "itemCollection"), where("category", "==", parseInt(idCat)))
            getDocs(filteredCollection)
                .then((rawItems) => {
                    if (rawItems.size !== 0) {
                        const data = rawItems.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                        setItems(data)
                    }
                    else {
                        console.log("No hay productos en esta categoria")
                    }
                })
        }
    }, [idCat])

    return (
        items.length !== 0
            ? (
                <div>
                    <h1>{props.greeting}</h1>
                    <ItemList items={items} />
                </div >
            )
            :
            (
                <h2>Cargando productos...</h2>
            )
    )
}


export default ItemListContainer