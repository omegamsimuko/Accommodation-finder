import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ifind</span>
        <span className="title">Register</span>

        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign In</button>
        </form>
        <p>
          You Don't Have An Account? <Link to="/register">Register</Link>
        </p> {/* Link to Register page */}
      </div>
    </div>
  );
}

export default Login;
