const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const mongoose = require("mongoose");

// config mongoose and connect to mongodb server
const mongoConfig = {
  username: "new-user1",
  password: "vM9eGla6tRlpO2YN",
  db: "telkom_ar_api",
};
const MONGO_URI = `mongodb://localhost/telkom_ar_api`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongo server!"))
  .catch((err) => console.error("mongo server connection error", err));

// config express middleware
app.use(express.json());
app.use(cors());

// config routes
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const orderRoute = require("./routes/orders");
const productRoute = require("./routes/products");

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("ok");
});


// start server
const PORT = 3900;
http.listen(PORT, () => console.log(`connected on port ${PORT}!`));
