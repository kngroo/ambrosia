const Server = require('./server.js')
const port = (process.env.PORT || 5000)
const app = Server.app()

app.listen(port, () => {
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log(`Listening at http://localhost:${port}`)
});
