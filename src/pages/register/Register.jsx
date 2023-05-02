import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Giriş Yap</h1>
          <form>
            <input type="text" placeholder="Kullanıcı adı" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Şifre" />
            <input type="text" placeholder="İsim" />
            <button>Kaydol</button>
          </form>
        </div>
        <div className="right">
          <h1>Flip</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
            atque.
          </p>
          <span>Zaten bir hesabınız var mu?</span>
          <Link to="/login">
            <button>Giriş Yap</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
