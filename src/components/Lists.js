import { fetchRestaurantData } from "../api";
//import { fetchWishlistData } from "../api";
export const restaurant = await fetchRestaurantData();


async function fetchWishlistData() {
    try {
      const response = await fetch('https://localhost:7027/api/wishlist');
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching wishlist data:', error);
      throw error; 
    }
  }
  
  export async function retrieveWishlistDetails() {
    try {
      const wishlistData = await fetchWishlistData();
      const wishlistDetails = wishlistData.reduce((acc, wishlistItem) => {
        wishlistItem.menuItems.forEach(menuItem => {
          acc.push({
            userId: wishlistItem.userId,
            menuItem: menuItem
          });
        });
        return acc;
      }, []);
      return wishlistDetails;
    } catch (error) {
      console.error('Error retrieving wishlist details:', error);
      throw error; 
    }
  }
  
  // Call retrieveWishlistDetails function to get the userId and menuItemId
  export const wishlistDetails = await retrieveWishlistDetails();
  
  export const createWishlist = async (userId, menuItemId) => {
    try {
      const response = await fetch('https://localhost:7027/api/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId,
          menuItemId: menuItemId
        })
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Failed to create wishlist');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating wishlist:', error);
      throw error;
    }
  };
  
/*
export const restaurant = [
    {
        "id": 1,
        "foodType": "Burger",
        "name": "Daily Specials",
        "price": 25,
        "rating": 4,
        "image": "https://wallpaperaccess.com/full/4496929.jpg",
        "deliveryTime" : 20,
        "description": "Indulge in our Daily Specials, where every bite is a burst of flavor. Our signature burger is crispy on the outside and succulently juicy on the inside. Served with a delightful array of chutneys, it's the perfect choice for your craving."
    },
    {
        "id": 2,
        "foodType": "Burger",
        "name": "Family Meal",
        "price": 20,
        "rating": 4,
        "image": "https://wallpaperaccess.com/full/2069188.jpg",
        "deliveryTime" : 20,
        "description": "Our Family Meal Deals are crafted to satisfy every member of your clan. Dive into layers of deliciousness with our burger that promises a symphony of flavors in every bite. A culinary adventure awaits, designed to bring joy to your family gatherings."
    },
    {
        "id": 3,
        "foodType": "Drinks",
        "name": "Summer Drinks",
        "price": 10,
        "rating": 4,
        "image": "https://wallpaperaccess.com/full/6271085.jpg",
        "deliveryTime" : 10,
        "description": "Quench your thirst with our refreshing Drinks Menu. From zesty concoctions to soothing classics, each sip is a journey of taste and rejuvenation. Elevate your dining experience with our handcrafted beverages, perfectly paired to complement your meal."
    },
    {
        "id": 4,
        "foodType": "Drinks",
        "name": "Energy Drink",
        "price": 10,
        "rating": 4,
        "image": "https://wallpaperaccess.com/thumb/1195449.jpg",
        "deliveryTime" : 10,
        "description": "Quench your thirst with our refreshing Drinks Menu. From zesty concoctions to soothing classics, each sip is a journey of taste and rejuvenation. Elevate your dining experience with our handcrafted beverages, perfectly paired to complement your meal."
    },
    {
        "id": 5,
        "foodType": "Drinks",
        "name": "Beach Drink",
        "price": 10,
        "rating": 4,
        "image": "https://wallpaperaccess.com/thumb/3215780.jpg",
        "deliveryTime" : 10,
        "description": "Quench your thirst with our refreshing Drinks Menu. From zesty concoctions to soothing classics, each sip is a journey of taste and rejuvenation. Elevate your dining experience with our handcrafted beverages, perfectly paired to complement your meal."
    },
    {
        "id": 6,
        "foodType": "Sushi",
        "name": "Sushi Food",
        "price": 30,
        "rating": 4,
        "image": "https://wallpaperaccess.com/full/286305.jpg",
        "deliveryTime" : 29,
        "description": "Embark on a culinary voyage with our exquisite Sushi Food selection. Delight in the artistry of sushi, where every roll is a masterpiece of flavor and texture. Immerse yourself in the sophistication of Japanese cuisine, meticulously prepared to tantalize your senses."
    },
    {
        "id": 7,
        "foodType": "Breakfast",
        "name": "Breakfast  Burrito",
        "price": 5,
        "rating": 4,
        "image": "https://wallpaperaccess.com/thumb/2851613.jpg",
        "deliveryTime" : 15,
        "description": "Start your day right with our Breakfast Plates, a symphony of morning flavors that awaken your palate. From hearty classics to innovative creations, each plate offers a delicious journey to kickstart your day with energy and enthusiasm."
    },
    {
        "id": 8,
        "foodType": "Burger",
        "name": "Kids Menu",
        "price": 15,
        "rating": 3,
        "image": "https://wallpaperaccess.com/full/512858.jpg",
        "deliveryTime" : 30,
        "description": "Our Kids Menu is designed to delight our youngest patrons with flavors they'll adore. Treat your little ones to our mini-sized burger, packed with the same irresistible taste in a size that's just right for them. It's a meal that brings smiles to every child's face, making dining a playful and enjoyable experience."
    },
    {
        "id": 9,
        "foodType": "Burger",
        "name": "Daily Specials",
        "price": 25,
        "rating": 4,
        "image": "https://wallpaperaccess.com/full/4496929.jpg",
        "deliveryTime" : 20,
        "description": "Indulge in our Daily Specials, where every bite is a burst of flavor. Our signature burger is crispy on the outside and succulently juicy on the inside. Served with a delightful array of chutneys, it's the perfect choice for your craving."
    },
    {
        "id": 10,
        "foodType": "Pizza",
        "name": "Cool Pizza",
        "price": 45,
        "rating": 4,
        "image": "https://wallpaperaccess.com/thumb/424487.jpg",
        "deliveryTime" : 40,
        "description": "Indulge in our Daily Specials, where every bite is a burst of flavor. Our signature burger is crispy on the outside and succulently juicy on the inside. Served with a delightful array of chutneys, it's the perfect choice for your craving."
    },
    {
        "id": 11,
        "foodType": "Pizza",
        "name": "Pepperoni Pizza",
        "price": 45,
        "rating": 4,
        "image": "https://wallpaperaccess.com/thumb/4847275.jpg",
        "deliveryTime" : 40,
        "description": "Indulge in our Daily Specials, where every bite is a burst of flavor. Our signature burger is crispy on the outside and succulently juicy on the inside. Served with a delightful array of chutneys, it's the perfect choice for your craving."
    },
    {
        "id": 12,
        "foodType": "Pizza",
        "name": "Chesse Pizza",
        "price": 45,
        "rating": 4,
        "image": "https://wallpaperaccess.com/thumb/3916843.jpg",
        "deliveryTime" : 40,
        "description": "Indulge in our Daily Specials, where every bite is a burst of flavor. Our signature burger is crispy on the outside and succulently juicy on the inside. Served with a delightful array of chutneys, it's the perfect choice for your craving."
    },
    {
        "id": 13,
        "foodType": "Breakfast",
        "name": "Wok",
        "price": 45,
        "rating": 3,
        "image": "https://wallpaperaccess.com/full/1306317.jpg",
        "deliveryTime" : 10,
        "description": "Indulge in our Daily Specials, where every bite is a burst of flavor. Our signature burger is crispy on the outside and succulently juicy on the inside. Served with a delightful array of chutneys, it's the perfect choice for your craving."
    },
    {
        "id": 14,
        "foodType": "Breakfast",
        "name": "Healthy",
        "price": 15,
        "rating": 4,
        "image": " https://wallpaperaccess.com/full/1770149.jpg",
        "deliveryTime" : 10,
        "description": "Indulge in our Daily Specials, where every bite is a burst of flavor. Our signature burger is crispy on the outside and succulently juicy on the inside. Served with a delightful array of chutneys, it's the perfect choice for your craving."
    },
    {
        "id": 15,
        "foodType": "Breakfast",
        "name": "Omlett",
        "price": 15,
        "rating": 2,
        "image": " https://wallpaperaccess.com/full/1770147.jpg",
        "deliveryTime" : 10,
        "description": "Indulge in our Daily Specials, where every bite is a burst of flavor. Our signature burger is crispy on the outside and succulently juicy on the inside. Served with a delightful array of chutneys, it's the perfect choice for your craving."
    }
   
]
*/