import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import plusSign from '../images/icons8-plus-24.png';
import './index.css';

export default function Card({ product }) {
	const [firstPrice, setFirstPrice] = useState('');
	useEffect(() => {
		const priceFormatted = product.stocks[0].price.toString();
		setFirstPrice(
			`${priceFormatted.substring(0, priceFormatted.length - 2)}.${priceFormatted.substring(priceFormatted.length - 2)}`
		);
	}, [product.stocks]);

	return (
		<div className="container">
			<div className="infoContainer">
				<div className="title">{product.brand}</div>
				<div className="imageContainer">
					<img src={require(`../images${product.image}`)} className="productImage" alt={product.brand} />
				</div>
			</div>
			<div className="extraContainer">
				<div className="priceContainer">${firstPrice}</div>
				<Link to={`/product/${product.id}-${product.brand.toLowerCase().replace(' ', '-')}`}>
					<div className="addContainer">
						<img src={plusSign} alt="add" />
					</div>
				</Link>
			</div>
		</div>
	);
}
