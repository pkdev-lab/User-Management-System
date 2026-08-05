const dotenv = require('dotenv');

dotenv.config();

const config = require('./config/config');

//const connectDB = require('./server/database/connection');

const {
    connectDB,
    disconnectDB
} = require('./server/database/connection');


const app = require('./app');
let server;
async function bootstrap() {
    await connectDB();

        server = app.listen(config.port, () => {
        console.log(`Server is running on http://localhost:${config.port}`);
    });
}

bootstrap();

async function shutdown(signal) {

    console.log(`\n${signal} received. Shutting down gracefully...`);

    server.close(async () => {
        console.log("HTTP server closed.");
        await disconnectDB();
        process.exit(0);
    });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));