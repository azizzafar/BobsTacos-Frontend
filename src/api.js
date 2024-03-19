// Define a function to fetch restaurant data
export async function fetchRestaurantData() {
    try {
      const response = await fetch('https://localhost:7027/MenuItem/MenuItems');
      const data = await response.json();
      return data; //
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
      throw error; 
    }
  }
  
  
