import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { queryCall } from '../data/requests';
import { SINGLE_PRODUCT_QUERY } from '../data/productQueries';
import bag from '../images/bag.svg';
import './index.css';

export default function Details() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [selectedSKU, setSelectedSKU] = useState('');
	const [selectedStock, setSelectedStock] = useState();
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		const fetchProductData = () => {
			const productId = id.split('-')[0];
			queryCall(SINGLE_PRODUCT_QUERY, { id: productId }).then(({ product }) => {
				setProduct(product);
				if (!selectedSKU) {
					setSelectedSKU(product.skus[0].code);
				}
			});
		};
		fetchProductData();
		// Query the data every 5 seconds
		const interval = setInterval(() => {
			fetchProductData();
		}, 5000);
		//Clear interval so it doesn't keep querying when destroying component
		return () => clearInterval(interval);
	}, [id, selectedSKU]);

	useEffect(() => {
		setSelectedStock(product?.stocks?.find(({ code }) => code === selectedSKU));
	}, [product.stocks, selectedSKU]);

	// We only need to know the ID and the SKU selected for the bag, the rest of the data can be obtained elsewere
	const addTo = (selected) => {
		alert(`Added to ${selected}:\nID:${product.id}\nSKU:${selectedSKU}`);
	};

	const priceFormatted = selectedStock ? selectedStock.price.toString() : '000';
	const croppedText = isExpanded ? product?.information : product?.information?.substring(0, 250);

	return (
		<div className="detailContainer">
			<div className="imageContainerDetail">
				{product.image && (
					<img src={require(`../images${product.image}`)} className="productImage" alt={product.brand} />
				)}
			</div>
			<div className="informationDetailContainer">
				<div className="namePriceContainer">
					<div className="nameText">{product.brand}</div>
					<div className="priceText">
						${' '}
						{`${priceFormatted?.substring(0, priceFormatted?.length - 2)}.${priceFormatted?.substring(
							priceFormatted?.length - 2
						)}`}
					</div>
				</div>
				<div className="originStockContainer">
					<div className="originText">Origin: {product.origin}</div> |
					<div className="stockText">Stock: {selectedStock?.stock}</div>
				</div>
				<div className="descriptionTitle">Description</div>
				<div className="descriptionContainer">
					{croppedText}
					<span className="readMoreText" onClick={() => setIsExpanded(!isExpanded)}>
						{isExpanded ? ' ...Read less' : ' ...Read more'}
					</span>
				</div>
				<div className="descriptionTitle">Size</div>
				<div className="skusContainer">
					{product.skus &&
						product.skus.map((sku) => {
							return (
								<div
									className={sku.code === selectedSKU ? 'skuDetailContainerSelected' : 'skuDetailContainer'}
									onClick={() => setSelectedSKU(sku.code)}
								>
									<div className={sku.code === selectedSKU ? 'skuNameContainerSelected' : 'skuNameContainer'}>
										{sku.name}
									</div>
								</div>
							);
						})}
				</div>
				<div className="footerContainer">
					<div className="addToBagContainer" onClick={() => addTo('Bag')}>
						<img src={bag} alt="addToBag" />
					</div>
					<div className="addToCartContainer" onClick={() => addTo('Cart')}>
						<span className="addToCartText">Add to cart</span>
					</div>
				</div>
			</div>
		</div>
	);
}
