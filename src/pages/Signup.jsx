import React from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        console.log(user);
        const fromCopy = { ...formData };
        delete fromCopy.password;
        fromCopy.timeStamp = serverTimestamp();
        setDoc(doc(db, "users", user.uid), fromCopy);
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    // setFormData({ name: "", email: "", password: "" });
    navigate("/");
  };
  return (
    <form className="w-1/2" onSubmit={onSubmit}>
      <div className="px-4 py-4 card glass">
        <p className="card-title">Signup</p>
        <div className="card-body">
          <input
            className="w-full max-w-xs input input-bordered"
            value={name}
            onChange={onChange}
            id="name"
            type="text"
            placeholder="User"
          />
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
        <button className="px-2 btn btn-block">Signup</button>
      </div>
    </form>
  );
};

export default Login;
