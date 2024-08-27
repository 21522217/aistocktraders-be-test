const express = require("express");
const cors = require("cors");
const fetchDataFromAPI = require("./fetchData");
const sendToKafka = require("./producer");

const app = express();
app.use(cors());
app.use(express.json());

setInterval(async () => {
    const data = await fetchDataFromAPI();
    if (data.length) {
        await sendToKafka(data);
    }
}, 3000);

app.listen(8081, () => console.log(`Producer server running on port 8081`));