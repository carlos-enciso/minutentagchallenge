import { buildSchema } from 'graphql';

export const stockPricesGQLSchema = buildSchema(`
	type StockPrice {
		stock: Int
		price: Int
	}

	type Stock {
		id: ID
		stockPrice: StockPrice
	}

	type Query {
		stockPrices: [Stock]
		stockPrice(id: ID!): Stock
	}
`);
