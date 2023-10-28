const { Sequelize } = require("sequelize");
const mysql = require('mysql2')

const sequelize = new Sequelize("group-chat", "root", "Sql@123", {
    host: `localhost`,
    dialect: "mysql",
    logging: false
});

module.exports = sequelize;