const kafkaProducer = require("../configs/kafka");

const producer = kafkaProducer.producer();

const sendToKafka = async (data) => {
    try {
        await producer.connect();
        await producer.send({
            topic: "stock-data",
            messages: [{ value: JSON.stringify(data) }],
        });
        console.log("Sent to stock-data: " + data.length + " items");
        await producer.disconnect();
    } catch (error) {
        console.error("Error sending data to Kafka:", error);
    }
};

module.exports = sendToKafka;
