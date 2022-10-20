import { Link } from "react-router-dom";
import "./Hero.css";

const HeroPage = () => {
  return (
    <div className="home_page">
      <section className="home_page-intro">
        <header>
          <h1>
            Todoster
          </h1>
          <span>Do whatchu gotta do.</span>
        </header>
        <h4>
          We're here to help you get organized at Todoster. We are the BEST
          to-do app in all the land, just try us out!!
        </h4>
      </section>
      <div className="home_page-btns">
        <button className="login_btn btn">
          <Link to='/login' className="link">
            Log In
          </Link>
        </button>
        <button className="register_btn btn">Sign Up</button>
      </div>
    </div>
  );
};

export default HeroPage;
