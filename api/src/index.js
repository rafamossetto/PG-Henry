const app = require('./app')
const PORT = 3001;
require('./database');
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
