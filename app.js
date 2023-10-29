const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');

const userRoute = require("./routes/users");
const userChats = require('./routes/chats');
const sequelize = require("./db/connect");
const bodyParser = require("body-parser");


const User = require('./models/users');
const chats = require('./models/chats');

app.use(express.json())
// Full form of CORS => cross origin resourse sharing 
app.use(
    cors({
        origin: process.env.ORIGIN_IP,
    })
);

// Relationships
User.hasMany(chats);
chats.belongsTo(User);

app.use(userRoute);
app.use(userChats);

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