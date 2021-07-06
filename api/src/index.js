const app = require("./app");
require("./database");
const ProductRoutes = require("./routes/Products/products");

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});

app.use("/products", ProductRoutes);
