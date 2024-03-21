import React from "react";
import Navbar from "../components/header/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeWishlist } from "../components/redux/ShoppingCart";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";


const Account = () => {
  const { wish } = useSelector((item) => item.user);
  const { quantity, amount } = useSelector((carts) => carts.user);

  const dispatch = useDispatch();

  const handleRemoveWish = (cartItem) => {
    dispatch(removeWishlist(cartItem));
    toast.success("Item Removed!");
  };
  return (
    <>
      <Navbar />
 
      
      <div className="profile-container">
     
        <div className="only-profile">
         
        <div class="profile-container">
  <div class="profile-info">

    <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1710768473~exp=1710769073~hmac=f596e36651c81d0a0a8719436c5120afe30f73bf414f29ac8b99426e2338ffcf" alt="profile" class="profile" />
    
    <div>
      <h1 class="user">Unknown User</h1>
      <div class="top-left">
        <h1>{quantity}</h1>
        <h1>Order</h1>
      </div>
      <div class="top-right">
        <h1>{amount}</h1>
        <h1>Price</h1>
      </div>
    </div>
  </div>
</div>
        </div>
        
        <div>     
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
              <button className="cart-btn" onClick={() => handleRemoveWish(food_cart)}><i className="fa-solid fa-trash"></i></button>
              <div className="food-name">{food_cart.name}</div>
              <div className="rat-pir">
                <div className="approx-price">{food_cart.price + "$"}</div>
                  
              </div>
            </div>
          ))
        )}
        </div>
        </div>
        </div>
      </div>

    </>
  );
};

export default Account;
