import "../../styles/profile/profile.scss";
import background from "../../images/background.jpg";
import profilePicture from "../../images/profile.jpg";
const Profile = () => {
  return (
    <div className="profile" style={{ backgroundImage: `url(${background})` }}>
      <div className="wrapper">
        <div className="left">
          <img src={profilePicture} alt="" />
        </div>
        <div className="right">
          <h1>Samira Mohammadi</h1>
          <p>Professional Painter & Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
