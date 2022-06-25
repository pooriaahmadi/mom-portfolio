import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import "../../styles/category/category.scss";
import ReactImageGallery from "react-image-gallery";
function importAll(r) {
	return r
		.keys()
		.map(r)
		.map((r) => {
			return { original: r };
		});
}
const Category = ({ title, files }) => {
	const images = importAll(files);
	console.log(images);
	return (
		<div className="category">
			<div className="top">
				<h1>{title}</h1>
			</div>
			<div className="bottom">
				<ReactImageGallery
					useTranslate3D
					items={images}
					infinite
					lazyLoad
					showBullets
					showIndex
				/>
			</div>
		</div>
	);
};

export default Category;
