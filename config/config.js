require('dotenv').config()

module.exports = {
    PORT:process.env.PORT || 3000,
    DB_URI:process.env.DB_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRE:process.env.JWT_EXPIRE,
}