import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear sessionStorage
    sessionStorage.clear();
    // Redirect to login page
    navigate('/');
  };
  return (
    <button onClick={handleLogout} className="btn btn-danger">Logout</button>
  );
};

export default Logout;
