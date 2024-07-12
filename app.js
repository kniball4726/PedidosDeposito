const server = require('./config/server')
const dbConnect = require('./config/db')

server();
dbConnect();