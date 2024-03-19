//import { fetchRestaurantData } from "../api"

async function fetchRestaurantData() {
    try {
      const response = await fetch('https://localhost:7027/MenuItem/MenuItems');
      const data = await response.json();
      return data; //
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
      throw error; 
    }
  }
export const restaurant = await fetchRestaurantData();