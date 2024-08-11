const express = require("express");
const cors = require("cors");
const sequelize = require("./util/database");
const routes = require('./routes/routes');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
app.use('/api/v1', routes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`App is running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
