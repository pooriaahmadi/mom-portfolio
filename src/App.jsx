import "./app.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer></Footer>
			</div>
		</Router>
	);
};

export default App;
