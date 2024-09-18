import axios from 'axios';

const endpoint = 'http://localhost:4000/graphql';

export function queryCall(query, variables) {
	const graphqlQuery = {
		query,
		variables,
	};

	return new Promise((resolve, reject) => {
		return axios({
			url: endpoint,
			method: 'POST',
			data: graphqlQuery,
		})
			.then((response) => resolve(response.data.data))
			.catch((error) => reject(error));
	});
}
