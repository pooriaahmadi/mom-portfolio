import "../styles/home/home.scss";
import Profile from "../components/Profile/Profile";
import Category from "../components/Category/Category";

const Home = () => {
	return (
		<div className="home">
			<Profile></Profile>
			<div className="categories">
				<Category
					title="Acrylic on canvas"
					files={require.context(
						"../images/acrylic_on_canvas",
						false,
						/\.(png|jpe?g|svg)$/
					)}
				/>
				<Category
					title="Fasion Figure Sketches"
					files={require.context(
						"../images/fasion_figure_sketches",
						false,
						/\.(png|jpe?g|svg)$/
					)}
				/>
				<Category
					title="Ink on Paper"
					files={require.context(
						"../images/ink_on_paper",
						false,
						/\.(png|jpe?g|svg)$/
					)}
				/>
				<Category
					title="Oil on canvas"
					files={require.context(
						"../images/oil_on_canvas",
						false,
						/\.(png|jpe?g|svg)$/
					)}
				/>
				<Category
					title="Sketches"
					files={require.context(
						"../images/sketches",
						false,
						/\.(png|jpe?g|svg)$/
					)}
				/>
			</div>
		</div>
	);
};

export default Home;
