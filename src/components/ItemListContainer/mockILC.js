const products = [{
    id: 1,
    title: "Remera Errea 2022 Titular",
    description: "Remera CAB titular 2022",
    price: 12000,
    url: "https://via.placeholder.com/150/771796"
}
]

export default function mock() {
    const task = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
    return task
}