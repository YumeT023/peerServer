const { PeerServer } = require('peer');

require('dotenv').config();

const endpoint = process.env.ENDPOINT ?? '/peer';
const port = process.env.PORT ?? 8092;

const server = new PeerServer({
  path: endpoint,
  port
});

function onStartServer() {
  console.log(`Peer server running at http://localhost:${port}${endpoint}`);
}

server.use(require('cors')());
server.listen(onStartServer);
