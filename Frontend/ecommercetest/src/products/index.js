import './index.css';
import { queryCall } from '../data/requests';
import { PRODUCTS_QUERY } from '../data/productQueries';
import { useEffect, useState } from 'react';
import Card from '../cards';

function Products() {
	const [products, setProducts] = useState([]);

	//Load all products one at the start
	useEffect(() => {
		queryCall(PRODUCTS_QUERY).then(({ products }) => {
			setProducts(products);
		});
	}, []);

	return (
		<div className="Products">
			<div className="textContainer">
				<p className="greetingText">Hi Mr. Michael</p>
				<p className="welcomeText">Welcome Back!</p>
				<p className="productsText">Our Products</p>
			</div>
			<div className="contentContainer">
				{products.map((product) => (
					<Card product={product} />
				))}
			</div>
		</div>
	);
}

export default Products;
