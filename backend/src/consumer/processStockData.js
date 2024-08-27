const processStockData = (data) => {
    const increasingStocks = data
        .sort((a, b) => b.close - b.open - (a.close - a.open))
        .slice(0, data.length);
    const decreasingStocks = data
        .sort((a, b) => a.close - a.open - (b.close - b.open))
        .slice(0, data.length);
    const highestVolumeStocks = data.sort((a, b) => b.vol - a.vol).slice(0, data.length);

    return { increasingStocks, decreasingStocks, highestVolumeStocks };
};

module.exports = processStockData;