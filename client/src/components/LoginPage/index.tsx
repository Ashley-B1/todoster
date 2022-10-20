// import { Link } from 'react-router-dom';
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login_page form-page">
      <section className="login_form-sect form-sect">
        <form className="login_form form">
          <h3>Welcome Back!</h3>
          <section className="login_form-actions form_actions">
            <div className="login_form-inputs form_inputs">
              <input
                id="login_email"
                className="form_email"
                type="text"
                placeholder="Enter your email..."
              />
              <input
                id="login_pw"
                className="form_pw"
                type="password"
                placeholder="Enter your password..."
              />
            </div>
            <button className="login-page_btn form-btn login_btn btn">Log In</button>
          </section>
        </form>
      </section>
      <section className="login_bg form_bg"></section>
    </div>
  );
};

export default LoginPage;
