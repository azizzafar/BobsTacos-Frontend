import React, { useState, useEffect } from 'react';

const UpdateMenuItemForm = ({ menuItemId }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    deliveryTime: 0
  });

  useEffect(() => {
    fetchMenuItemData(menuItemId);
  }, [menuItemId]);

  const fetchMenuItemData = async (id) => {
    try {
      const response = await fetch(`https://localhost:7027/MenuItem/put/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch menu item data');
      }

      const data = await response.json();
      setFormData({
        name: data.name,
        price: data.price,
        deliveryTime: data.deliveryTime
      });
    } catch (error) {
      console.error('Error fetching menu item data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://localhost:7027/MenuItem/put/${menuItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to update menu item');
      }

      const updatedMenuItem = await response.json();
      console.log('Menu item updated successfully:', updatedMenuItem);
    } catch (error) {
      console.error('Error updating menu item:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
        <input type="number" name="deliveryTime" placeholder="Delivery Time" value={formData.deliveryTime} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateMenuItemForm;
