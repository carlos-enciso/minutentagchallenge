import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './errorPage';
import Products from './products';
import Details from './details';
import TopNavigation from './navigation';

function App() {
	return (
		<>
			<div className="app">
				<TopNavigation />
				<div className="wrapper">
					<Routes>
						<Route path="/" element={<Navigate to="/products" replace={true} />} />
						<Route path="/products" element={<Products />} />
						<Route path="/product/:id" element={<Details />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
