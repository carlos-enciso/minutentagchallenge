import { mergeTypeDefs } from '@graphql-tools/merge';
import { productsGQLSchema } from './product.js';
import { stockPricesGQLSchema } from './stockPrice.js';

export const mergedGQLSchema = mergeTypeDefs([stockPricesGQLSchema, productsGQLSchema]);
