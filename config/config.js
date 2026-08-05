const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 8080,
    mongoURI: process.env.MONGO_URI
};

// Validate required configuration
if (!config.mongoURI) {
    throw new Error("MONGO_URI environment variable is missing.");
}

module.exports = config;