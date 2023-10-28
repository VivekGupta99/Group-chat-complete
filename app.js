const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');

const userRoute = require("./routes/users");
const sequelize = require("./db/connect");
const bodyParser = require("body-parser");


app.use(express.json())
app.use(cors());
app.use(userRoute);

(async () => {
    try {
        const x = await sequelize.sync()
        if (x) {
            console.log("ok report")
        }
        app.listen(process.env.PORT, () => {
            console.log(`server listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
})()