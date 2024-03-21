import React, { useState, useEffect } from 'react';
import Navbar from '../components/header/Navbar';
import CreateMenuItemForm from './createMenuItem';
import UpdateMenuItemForm from './UpdateMenuItem';

function AdminProfile() {
  const [updateMenuItemId, setUpdateMenuItemId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleMenuItemIdChange = (e) => {
    setUpdateMenuItemId(e.target.value);
  };

  useEffect(() => {
  }, [updateMenuItemId]);

  const handleUpdate = async () => {
    console.log('Updating menu item:', updateMenuItemId); 
  };

  return (
    <>
      <Navbar />
      <div className="admin-profile">
        <h1 className="admin-profile__heading">Admin Profile</h1>
        <div className="admin-profile__add-item">
          <h2>Update Menu Item</h2>
          <input
            type="text"
            placeholder="Enter Menu Item ID"
            value={updateMenuItemId}
            onChange={handleMenuItemIdChange}
            className="admin-profile__input"
          />
          <div className="admin-profile__update-section">
            {updateMenuItemId && <UpdateMenuItemForm menuItemId={updateMenuItemId} />}
            <button onClick={handleUpdate}>Update Menu Item</button>
          </div>

          <h2>Create a New Menu</h2>
          <div className="admin-profile__create-section">
            <button onClick={() => setShowCreateForm(!showCreateForm)}>
              {showCreateForm ? 'Close Create Form' : 'Create New Menu Item'}
            </button>
            {showCreateForm && <CreateMenuItemForm />}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfile;
