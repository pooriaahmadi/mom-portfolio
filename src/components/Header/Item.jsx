import { Link, useLocation } from "react-router-dom";
const Item = ({ to, children }) => {
	const location = useLocation();
	return (
		<Link to={to} className={location.pathname === to ? "active" : ""}>
			{children}
		</Link>
	);
};

export default Item;
