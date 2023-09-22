const app = require("./app");
const dotenv = require("dotenv")
const connectionDB = require("./Config/database");


// Database Connection
dotenv.config({path:"backend/Config/Config.env"});
const PORT=process.env.PORT || 8000;


connectionDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
