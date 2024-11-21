import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ifind</span>
        <span className="title">Register</span>

        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            img
          </label>
          <button>SignUp</button>
        </form>
        <p>
          Do you Have An Account? <Link to="/login">LogIn</Link>
        </p> {/* Link to Login page */}
      </div>
    </div>
  );
}

export default Register;
