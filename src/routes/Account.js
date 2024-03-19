import React from "react";
import Navbar from "../components/header/Navbar";
import { Link } from "react-router-dom";
import Login from "./login";
import Register from "./userRegistration";
import Logout from "./logout";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Profile = () => {
  const firstName = sessionStorage.getItem('firstName');
  const lastName = sessionStorage.getItem('lastName');
  const { wish } = useSelector((state) => state.user);

  const renderProfileContent = () => {
    if (firstName && lastName) {
      return (
        <div>
          <h1 className="user">{firstName} {lastName}</h1>
          <div className="wish-container">
            <h1 className="h1-text">Your Wishlist</h1>
            <div className="main">
              {wish.length === 0 ? (
                <div>
                  <h1 className="text">No Item in cart!</h1>
                </div>
              ) : (
                wish?.map((food_cart) => (
                  <div className="under-container">
                    <div className="explore-card-cover">
                      <Link to={`/item/${food_cart.id}`}>
                        <img src={food_cart.image} alt={food_cart.name} className="explore-card-image"/>
                      </Link>
                    </div>
                    <div className="food-name">{food_cart.name}</div>
                    <div className="rat-pir">
                      <div className="approx-price">{food_cart.price + "$"}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <Logout />
        </div>
      );
    } else {
      return (
        <>
          <Login />
          <Register />
        </>
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="only-profile">
          <img src="https://img.freepik.com/free-photo/top-view-arrangement-with-salad-boxes-sauce_23-2148247882.jpg?w=740&t=st=1692709585~exp=1692710185~hmac=bacddd6a681f238f85bf29020feccb0e1dd4d81f51945836080753ed134a1b94" alt="profile" />
          <div>
            <img src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png" alt="profile" className="profile" />
          </div>
          {renderProfileContent()}
        </div>
      </div>
    </>
  );
};

export default Profile;
