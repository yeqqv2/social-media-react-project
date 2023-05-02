import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.unsplash.com/photo-1682943894249-ed8eda4362c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
          className="cover"
        />
        <img
          src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profile">
        <div className="profileContainer">
          <div className="userInfo">
            <div className="left">
              <a href="https://facebook.com">
                <FacebookTwoToneIcon fontSize="large" />
              </a>
              <a href="https://facebook.com">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="https://facebook.com">
                <TwitterIcon fontSize="large" />
              </a>
              <a href="https://facebook.com">
                <LinkedInIcon fontSize="large" />
              </a>
              <a href="https://facebook.com">
                <PinterestIcon fontSize="large" />
              </a>
            </div>
            <div className="center">
              <span className="name">Yunus Emre Korkmaz</span>
              <div className="info">
                <div className="item">
                  <PlaceIcon />
                  <span className="infos">İstanbul, Türkiye</span>
                </div>
                <div className="item">
                  <LanguageIcon />
                  <span className="infos">yeqq.com</span>
                </div>
              </div>
              <button>Takip et</button>
            </div>
            <div className="right">
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
