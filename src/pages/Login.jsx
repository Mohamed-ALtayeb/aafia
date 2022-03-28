import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigate("/profile");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <form className="w-1/2" onSubmit={onSubmit}>
      <div className="px-4 py-4 card glass">
        <p className="card-title">Login</p>
        <div className="card-body">
          <input
            className="w-full max-w-xs input input-bordered"
            value={email}
            onChange={onChange}
            id="email"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full max-w-xs input input-bordered"
            value={password}
            onChange={onChange}
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-row items-center justify-between mx-auto mb-6 space-x-4 font-semibold">
          <Link className="link" to={"/sign-up"}>
            SignUp
          </Link>
          <p className="self-center">or</p>
          <Link className=" link" to={"/forgot-password"}>
            Forgot Password
          </Link>
        </div>
        <button className="px-2 btn btn-block">Submit</button>
      </div>
    </form>
  );
};

export default Login;
