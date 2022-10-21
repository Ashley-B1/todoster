import { Link } from "react-router-dom";
import "./Hero.css";

const HeroPage = () => {
  return (
    <div className="home_page">
      <section className="home_page-intro">
        <header>
          <h1>Todoster</h1>
          <span>Do whatchu gotta do.</span>
        </header>
        <h4>
          We're here to help you get organized! Sign up today for <span>FREE</span>!
        </h4>
      </section>
      <div className="home_page-btns">
        <button className="login_btn btn">
          <Link to="/login" className="link">
            Log In
          </Link>
        </button>
        <button className="register_btn btn">
          <Link to="/register" className="link">
            Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
