import { getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, SetFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name } = formData;

  const logOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div>
      <h3>Hello {name}!</h3>
      <button className="btn" onClick={logOut}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
