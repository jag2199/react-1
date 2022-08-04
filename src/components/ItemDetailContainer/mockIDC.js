import products from "../../products"

export default function getItem(id) {
    const task = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[id])
        }, 2000);
    })
    return task
}