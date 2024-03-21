import React, { useState } from "react";
import "../exploreSection/ExploreSectionStyles.css";
import { createWishlist, restaurant } from "../Lists";
import { useRecoilValue } from "recoil";
import {
  setAtomCheckBox,
  setAtomPrice,
  setAtomRating,
  setAtomTime,
} from "../Filters/filterItems/filtertab/PopElement";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart, AddWishlist } from "../redux/ShoppingCart";
import { toast } from "react-hot-toast";
import Cart from "../../routes/Cart";


const ExploreSection = () => {
  const [search, setSearch] = useState("");

  const firstName = sessionStorage.getItem('firstName');
  const ID = sessionStorage.getItem('userId')
  console.log("User ID:", ID); // Log user ID
  console.log("first Name:", firstName); // Log user ID

  const dispatch = useDispatch();
  const exploreItem = restaurant.filter((item) =>
    search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
  );

  const coilPrice = useRecoilValue(setAtomPrice);
  const coilRating = useRecoilValue(setAtomRating);
  const coilTime = useRecoilValue(setAtomTime);
  const coilCheckbox = useRecoilValue(setAtomCheckBox);

  const addToWish = async (item, userId, itemId) => {
    try {
      // Create wishlist for the user and menu item
      await createWishlist(userId, itemId);
  
      // Display a success message to the user
      toast.success("Item added to wishlist successfully");
  
      // Dispatch action to add the item to the Redux store
      dispatch(AddWishlist(item));
    } catch (error) {
      // Handle any errors that occur during the wishlist creation process
      console.error('Error creating wishlist:', error);
      toast.error('Failed to add item to wishlist. Please try again.');
    }
  };
  
  
  const addToCart = (item) => {
    dispatch(AddCart(item));
    toast.success("Item added in cart!");
  };

  const renderRestaurant = (restaurant) => {
    const meetsFilters =
      restaurant.rating <= coilRating &&
      restaurant.price <= coilPrice &&
      restaurant.deliveryTime <= coilTime;

    if (
      coilCheckbox.every((checked, index) =>
        checked ? restaurant.foodType.startsWith(filters[index]) : true
      ) &&
      meetsFilters
    ) {
      return (
        <div className="res-row" key={restaurant.id}>
          <div className="explore-card-cover">
            <Link to={`/item/${restaurant.id}`}>
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="explore-card-image"
              />
            </Link>
            {restaurant.deliveryTime <= coilTime && (
              <div className="delivery-time">{restaurant.deliveryTime + "min"}
                    <button className="add-to-wishlist-btn" onClick={() => addToWish(restaurant, ID, restaurant.id)}>Favorite</button>
          <button className="add-to-wishlist-btn" onClick={() => addToCart(restaurant)}>Add to Cart</button>
              </div>
              
            )}
          </div>
          <div className="res-name">{restaurant.name}</div>
          {restaurant.foodType}
          <div className="pir-rat">
            {restaurant.price <= coilPrice && (
              <div className="approx-price">{restaurant.price + "$"}</div>
            )}
            {restaurant.rating <= coilRating && (
              <div className="res-rating absolute-center">
                {restaurant.rating}
                <i className="fi fi-rr-star absolute-center"></i>
              </div>
            )}
          </div>
            
        </div>
      );
    }
    return null;
  };

  //const filters = restaurant.filter((_, index) => coilCheckbox[index]);
  const filters = ["Burger", "Drinks", "Sushi", "Pizza", "Breakfast"];

  return (
    <div className="max-width explore-section">
      <div className="cart-container">
        <Cart showTextContainer={true} showNavbar={true} />
      </div>
      
      <div className="collection-title">
        <div className="collection-search">
          <h1>--- BOBS TACOS MENY ---</h1>
          <div className="collection-icon">
            <input
              type="search"
              placeholder="Enter Your Food..."
              id="collection-input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="explore-grid">{exploreItem.map(renderRestaurant)}</div>
      </div>
      
    </div>
  );
};

export default ExploreSection;
