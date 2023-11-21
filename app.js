const { PeerServer } = require('peer');

require('dotenv').config();

const path = process.env.PATH || "/peer";
const port = process.env.PORT || 8080;

const server = new PeerServer({
  path,
  port
});

function onStartServer() {
  console.log(`Peer server running at http://localhost:${port}/${path}`);
}

server.use(require('cors')({
  origin: "*"
}));
server.listen(onStartServer);
