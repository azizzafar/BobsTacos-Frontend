import React, { useState } from 'react';

const CreateMenuItemForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    price: 0,
    rating: 0,
    foodType: '',
    description: '',
    deliveryTime: 0,
    image: ''
  });

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
      const response = await fetch('https://localhost:7027/MenuItem/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to create menuItem');
      }

      const data = await response.json();
      console.log('MenuItem created successfully:', data);
      // Display success message to the user
    } catch (error) {
      console.error('Error creating menuItem:', error);
      // Display error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="Id" value={formData.id} onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
        <input type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} />
        <input type="text" name="foodType" placeholder="Food Type" value={formData.foodType} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="number" name="deliveryTime" placeholder="Delivery Time" value={formData.deliveryTime} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateMenuItemForm;
