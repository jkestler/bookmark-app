const app = require('./app');
const http = require('http');
const port = normalizePort(process.env.PORT || "5001");
app.set("port", port);

const server = http.createServer(app);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

server.listen(port);



server.on("listening", () => {
  console.log(`server is listening for requests on port ${server.address().port}`);
});




// app.listen(port, (req, res) => {
//   console.log(`server listening on port: ${port}`);
// });