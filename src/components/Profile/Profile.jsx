import "../../styles/profile/profile.scss";
import background from "../../images/background.jpg";
import profilePicture from "../../images/profile.jpg";
const Profile = () => {
	return (
		<div
			className="profile"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="wrapper">
				<div className="left">
					<img src={profilePicture} alt="" />
				</div>
				<div className="right">
					<h1>Samira Mohammadi</h1>
					<p>Professional Painter</p>
					<div className="links">
						<a
							href="mailto:samiramohammadi4849@gmail.com"
							target="_blank"
						>
							Email
						</a>
						<a
							href="https://www.instagram.com/samiramohammadi.fp/"
							target="_blank"
						>
							Instagram
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
