import React from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className='register_page form-page'>
      <section className="register_form-sect form-sect">
        <form className="register_form form">
          <h3>Welcome to Todoster!</h3>
          <section className="register_form-actions form_actions">
            <div className="register_form-inputs form_inputs">
              <input
                id="register_email"
                className="form_email"
                type="text"
                placeholder="Enter your email..."
              />
              <input
                id="register_pw"
                className="form_pw"
                type="password"
                placeholder="Enter your password..."
              />
            </div>
            <button className="register-page_btn form-btn register_btn btn">Register</button>
          </section>
        </form>
      </section>
      <section className="register_bg form_bg"></section>
    </div>
  )
}

export default RegisterPage
