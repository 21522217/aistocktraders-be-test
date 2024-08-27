const kafkaConsumer = require("../configs/kafka");
const processStockData = require("./processStockData");
const constants = require("../shared/constants");

const consumer = kafkaConsumer.consumer({ groupId: "stock-group" });

const runConsumer = async (io) => {
    await consumer.connect();
    await consumer.subscribe({ topic: constants.TOPIC_NAME, fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const data = JSON.parse(message.value.toString());
            console.log(`Received data from ${topic}: ${data.length} items`);
            const processedData = processStockData(data);

            io.emit("update", processedData);
        },
    });
};

module.exports = runConsumer;
