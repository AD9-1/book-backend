require("dotenv").config();
module.exports = {

 client:"mysql2",
 connection:{
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE
  },
};
