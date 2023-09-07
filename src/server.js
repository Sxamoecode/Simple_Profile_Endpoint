const {createServer} = require('http');
const app = require('./app');
const PORT = 6600

const server = createServer(app);

async function startServer() {


    server.listen(PORT, () => {
        console.log(`Starting Server on port ${PORT}`);
    })
}
startServer();