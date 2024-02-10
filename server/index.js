const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentRoute");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());

const connDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Yug",
    })
    .then(() => {
      console.log("Db Connected!");
    })
    .catch((e) => {
      console.log(e);
    });
};

connDb();

PORT = process.env.PORT || 3000;

app.use('/api/v1', studentRoute);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
