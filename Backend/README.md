# Minutentag Backend Test

Backend server using [GraphQL](https://graphql.org) and [Apollo server](https://www.apollographql.com)

## Installation

- Download the code using your preffered method (zip, github desktop, etc)
- Open a terminal and navigate to the downloaded code
- Simply run `npm install` to install all required dependencies
- After installation run `npm run server` and wait until the console shows the message `🚀  Server ready at http://localhost:4000/`
- Now you are ready to to start querying at http://localhost:4000/

## GraphQL

When querying to GraphQL you need to create a literal string where you specify the required data, for example:

```javascript
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
```

Send this as the `query` object in the body of your request.

This will make a query to the Products list and return the data requested in a JSON format.

You can then use the data as a regular JSON value.

### Credits

Carlos Enciso Morones  
 [LinkedIn](https://www.linkedin.com/in/carlos-enciso-7365052b/)
