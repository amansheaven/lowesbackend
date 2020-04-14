const dotenv = require('dotenv');

dotenv.config();

export default {
    databaseURL: process.env.DB_URI
}