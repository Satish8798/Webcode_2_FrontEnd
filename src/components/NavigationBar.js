import "../resources/styles/NavigationBar.css";

import React from "react";

function NavigationBar() {
  return (
    <div className="container-fluid ">
      <nav className="navigation-bar">
        <div className="logo-name">
          <img
            width="50"
            src="data:image/png;base64,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"
            alt="logo"
          />
          <p>
            stack<span>overflow</span>clone
          </p>
        </div>
        <div className="search-form">
          <form>
            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">
                Confirm identity
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
