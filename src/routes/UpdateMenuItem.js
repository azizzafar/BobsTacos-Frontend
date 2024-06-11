import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateMenuItem = ({ menuItemId }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    deliveryTime: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const token = sessionStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for missing menuItemId or token
    if (!menuItemId || !token) {
      console.error('Missing menuItemId or token. Update cannot proceed.');
      return; // Exit the function if either is missing
    }

    try {
      const response = await fetch(`https://localhost:7027/MenuItem/put/${menuItemId}`, {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update menu item: ${response.status} ${response.statusText}`);
      }

      const updatedMenuItem = await response.json();
      console.log('Menu item updated successfully:', updatedMenuItem);
      navigate('/')
    } catch (error) {
      console.error('Error updating menu item:', error);
    }
  };

  return (
    <div>
      {menuItemId && token ? ( // Conditionally render the form only if both values are present
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
          <input type="number" name="deliveryTime" placeholder="Delivery Time" value={formData.deliveryTime} onChange={handleChange} />
          <button type="submit">Update</button>
        </form>
      ) : (
        <p>Missing menuItemId or token. Please check and try again.</p>
      )}
    </div>
  );
};

export default UpdateMenuItem;
