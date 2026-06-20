import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/Auth_Context/Auth_Context';

const Login = () => {
  const {signUser}=use(AuthContext);

  const handleSignIn=(event)=>{
    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;
    signUser(email,password)
    .then(event.target.reset())
    .catch(error=>{
      alert(error);
    })

  }
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignIn}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" name='email' className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input type="password" name='password' className="input" placeholder="Password" />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <p>
                Didn't have an account?
                <Link className="text-blue-400 underline hover:font-bold" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;