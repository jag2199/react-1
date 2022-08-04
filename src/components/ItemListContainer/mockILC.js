import products from "../../products"

export default function mock(idCat) {
    const task = new Promise((resolve) => {
        setTimeout(() => {
            idCat
                ? resolve(products.filter(product => product.category == idCat))
                : resolve(products)
        }, 2000);
    })
    return task
}