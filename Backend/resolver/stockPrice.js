import stockPriceList from '../data/stock-price.js';

// Format Stock Prices to handle them easier in GraphQL
const formattedStocks = Object.keys(stockPriceList).map((stock) => {
	const currStock = stockPriceList[stock];
	return {
		id: stock,
		stockPrice: {
			stock: currStock.stock,
			price: currStock.price,
		},
	};
});

export const StockPricesResolver = {
	Query: {
		stockPrices: () => formattedStocks,
		stockPrice: (_, { id }) => {
			return formattedStocks.find((stock) => stock.id === id);
		},
	},
};
