import React from "react";
import useForm from "../../hooks/useForm.hook";

export const AuthPage = () => {
  const form = useForm();

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Minilink</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>

            <div>
              <div className="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  className="validate yellow-input white-text"
                  name="email"
                  {...form.inputEmail}
                />
                <label htmlFor="email" className="white-text">
                  Email
                </label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Password"
                  id="password"
                  type="password"
                  className="validate yellow-input white-text"
                  name="pass"
                  {...form.inputPass}
                />
                <label htmlFor="password" className="white-text">
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" {...form.signIn}>
              Sign in
            </button>
            <button
              className="btn grey ligten-1 black-text register-btn"
              {...form.register}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
