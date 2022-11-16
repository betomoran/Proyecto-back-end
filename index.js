const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: "Procesador amd ryzen",
    price: 3000,
    image: "images/product-1.jpg",
    stock: 50,
  },
  {
    id: 2,
    name: "Disco duro 500gb",
    price: 400,
    image: "images/product-2.jpg",
    stock: 50,
  },
  {
    id: 3,
    name: "Teclado gamer",
    price: 600,
    image: "images/product-3.jpg",
    stock: 50,
  },
  {
    id: 4,
    name: "Mouse gamer",
    price: 400,
    image: "images/product-4.jpg",
    stock: 50,
  },
  {
    id: 5,
    name: "Tarjeta Grafica",
    price: 6300,
    image: "images/product-5.jpg",
    stock: 50,
  },
  {
    id: 6,
    name: "Mousepad",
    price: 180,
    image: "images/product-6.jpg",
    stock: 50,
  },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.use("/", express.static("frontend"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});