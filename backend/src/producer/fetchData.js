const axios = require("axios");

const fetchDataFromAPI = async () => {
    try {
        const response = await axios.post(
            "https://stocktraders.vn/service/data/getTotalTradeReal",
            {
                TotalTradeRealRequest: { account: "StockTraders" },
            }
        );
        return response.data.TotalTradeRealReply.stockTotalReals;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        return [];
    }
};

module.exports = fetchDataFromAPI;
