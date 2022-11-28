import React from 'react'
import "../resources/styles/Signup-Login.css";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-12 signup-form ms-auto">
          <form>
            <div className="form-floating mb-3 w-75">
              <input
                type="email"
                className="form-control rounded-0 h-25"
                placeholder="name@example.com"
                required
              />
              <label>Email address</label>
            </div>
            <div className="form-floating mb-3 w-75">
              <input
                type="password"
                className="form-control rounded-0 h-25"
                placeholder="Password"
                required
              />
              <label>Password</label>
            </div>
            <button type="submit" className="btn btn-primary rounded-0 w-75">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login