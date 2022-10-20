import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login_page">
      <section className="login_form-sect">
        <form className="login_form">
          <h3>Welcome Back!</h3>
          <section className="login_form-actions">
            <div className="login_form-inputs">
              <input
                id="login_email"
                type="text"
                placeholder="Enter your email..."
              />
              <input
                id="login_pw"
                type="password"
                placeholder="Enter your password..."
              />
            </div>
            <button className="login-page_btn login_btn btn">Log In</button>
          </section>
        </form>
      </section>
      <section className="login_bg"></section>
    </div>
  );
};

export default LoginPage;
