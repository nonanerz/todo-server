const host = 'localhost'

module.exports = {
  port: process.env.port || process.env.PORT || '3005',
  mongoUrl: process.env.MONGODB_URI || `mongodb://nonanerz:123@ds229438.mlab.com:29438/todos`
}
