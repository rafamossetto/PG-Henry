import app from "./app";
import './database';

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
