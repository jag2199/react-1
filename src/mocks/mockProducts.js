import products from "../products.js"

export default function getItems() {
    const task = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
    return task
}