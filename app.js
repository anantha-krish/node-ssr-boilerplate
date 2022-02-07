const express = require("express");
const app = express();

const Order = require("./orderModel");
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(`${__dirname}/public`));

app.use(express.json());

app.route("/api").get((req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

app
  .route("/orders")
  .get(async (req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders);
  })
  .post(async (req, res) => {
    const order = new Order(req.body);
    const insertedOrder = await order.save();
    res.status(201).json({
      order: insertedOrder,
      message: `Order was created succesfully -> Product:${insertedOrder.product}`,
    });
  });

app.route("/home").get(async (req, res) => {
  res.status(200).render("home", {
    title: "Home",
    isHome: true,
  });
});

app.route("/list").get(async (req, res) => {
  const orders = await Order.find();
  res.status(200).render("list", {
    title: "list",
    orders,
    isList: true,
  });
});

module.exports = app;
