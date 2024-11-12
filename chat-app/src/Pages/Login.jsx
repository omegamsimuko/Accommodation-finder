import React from 'react'

function Login() {
  return (
    <div className="formContainer">
         <div className="formWrapper">
            <span className="logo">Ifind</span>
            <span className="title">Register</span>
            
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                
                <button>Sign In</button>
            </form>
            <p>You Don't Have An Account?Register</p>
         </div>
    </div>
   
  )
}

export default Login