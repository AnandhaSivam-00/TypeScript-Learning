import * as http from "http";

const port = 3000;
const hostname = "0.0.0.0";

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  let roundingNumber : string = "Stringing";
  roundingNumber = "Doubling";
  res.end(roundingNumber);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
