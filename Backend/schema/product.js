import { buildSchema } from 'graphql';

export const productsGQLSchema = buildSchema(`
    type SKU {
		code: String
		name: String
	}

	type StockPrice {
		code: String
		stock: Int
		price: Int
	}

	type Product {
		id: ID
		brand: String
		image: String
		style: String
		substyle: String
		abv: String
		origin: String
		information: String
		skus: [SKU]
		stocks: [StockPrice]
	}
    
    type Query {
		products: [Product]
		product(id: ID!): Product
	}
`);
