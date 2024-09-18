import products from '../data/products.js';
import stockPrice from '../data/stock-price.js';

export const ProductResolver = {
	Query: {
		products: () => {
			return products.map((product) => {
				return {
					...product,
					stocks: product.skus.map((sku) => stockPrice[sku.code]),
				};
			});
		},
		product: (_, { id }) => {
			const foundProduct = products.find((product) => product.id === parseInt(id, 10));
			return {
				...foundProduct,
				stocks: foundProduct.skus.map((sku) => {
					return { code: sku.code, ...stockPrice[sku.code] };
				}),
			};
		},
	},
};
