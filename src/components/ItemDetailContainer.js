import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getItem } from "../mocks/mockProducts"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
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

export default function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const { idProd } = useParams()

    useEffect(() => {
        const docItem = doc(db, "itemCollection", idProd)
        getDoc(docItem)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = { id: snapshot.id, ...snapshot.data() }
                    console.log("Item:", data)
                    setItem(data)
                }
            })
            .catch((error) => console.error(error))
    }, [idProd])

    return (
        item ?
            <div>
                <ItemDetail item={item} />
            </div >
            :
            <h2>Cargando producto...</h2>
    )
}
