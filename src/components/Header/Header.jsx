import "../../styles/header/header.scss";

import Item from "./Item";

const Header = () => {
	return (
		<header>
			<div className="left">
				<h1>Samira.</h1>
				<Item to="/">
					<h2>Home</h2>
				</Item>
			</div>
		</header>
	);
};

export default Header;
