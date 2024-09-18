import { Link, useLocation } from 'react-router-dom';
import './index.css';
import menu from '../images/hamburger-menu.svg';
import back from '../images/back.svg';
import dots from '../images/dots.svg';
import profilePicture from '../images/profilePicture.jpg';

function TopNavigation() {
	const { pathname } = useLocation();
	const notImplemented = () => {
		alert('Functionality not implemented.');
	};
	return (
		<div className="topNavigation">
			<div className="menu">
				{pathname === '/products' ? (
					<img src={menu} alt="menu" onClick={() => notImplemented()} />
				) : (
					<Link to="/products">
						<img src={back} alt="back" className="back" />
					</Link>
				)}
			</div>

			{pathname !== '/products' ? <div className="detailTitle">Detail</div> : <></>}
			<div className="secundaryMenu">
				{pathname === '/products' ? (
					<img src={profilePicture} alt="profilePicture" className="profilePicture" />
				) : (
					<div className="menu">
						<img src={dots} alt="dots" onClick={() => notImplemented()} />
					</div>
				)}
			</div>
		</div>
	);
}

export default TopNavigation;
