export const PRODUCTS_QUERY = `
  query Products {
    products {
      id
      brand
      image
      stocks {
        stock
        price
      }
    }
  }
`;

export const SINGLE_PRODUCT_QUERY = `
  query Product($id: ID!) {
    product(id: $id) {
      id
      brand
      image
      origin
      information
      stocks {
        stock
        price
        code
      }
      skus {
        code
        name
      }
    }
  }
`;
