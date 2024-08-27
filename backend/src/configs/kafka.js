const { Kafka } = require("kafkajs");

const kafkaProvider = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID || "stock-app",
    brokers: process.env.KAFKA_BROKERS ? process.env.KAFKA_BROKERS.split(",") : ["localhost:9092"],
});

module.exports = kafkaProvider;
