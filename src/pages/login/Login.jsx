import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Flip</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            exercitationem vitae sed iure! Quo, ex!
          </p>
          <span>Hesabınız yok mu?</span>
          <Link to="/register">
            <button>Kaydol</button>
          </Link>
        </div>
        <div className="right">
          <h1>Giriş Yap</h1>
          <form>
            <input type="text" placeholder="Kullanıcı adı" />
            <input type="password" placeholder="Şifre" />
            <button onClick={handleLogin}>Giriş Yap</button>
          </form>
        </div>
      </div>
    </div>
  );
};
