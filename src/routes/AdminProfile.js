import React, { useState, useEffect } from 'react';
import Navbar from '../components/header/Navbar';
import CreateMenuItemForm from './createMenuItem';
import UpdateMenuItem from './UpdateMenuItem';
import Footer from '../components/footer/Footer';

function AdminProfile() {
  const [updateMenuItemId, setUpdateMenuItemId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);


  const handleMenuItemIdChange = (e) => {
    setUpdateMenuItemId(e.target.value);
  };

  useEffect(() => {
  }, [updateMenuItemId]);

  const handleUpdate = async () => {
    console.log('Updating menu item:', updateMenuItemId); 
  };

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <>
      <Navbar />
      <div className="admin-profile">
        <h1 className="admin-profile__heading">Admin Profile</h1>
        <div className="admin-profile__add-item">
          <h2>Update Menu Item</h2>
          <div className="admin-profile__search">
            <button className='btn-search' onClick={handleSearchClick}>Search</button>
            {showSearchInput && (
              <input
                type="text"
                placeholder="Enter Menu Item ID"
                value={updateMenuItemId}
                onChange={handleMenuItemIdChange}
                className="admin-profile__input"
              />
            )}
          </div>
          <div className="admin-profile__update-section">
            {updateMenuItemId && <UpdateMenuItem menuItemId={updateMenuItemId} />}
          </div>

          <h2>Create a New Menu</h2>
          <div className="admin-profile__create-section">
            <button className='btn-search' onClick={() => setShowCreateForm(!showCreateForm)}>
              {showCreateForm ? 'Close Create Form' : 'Create New Menu Item'}
            </button>
            {showCreateForm && <CreateMenuItemForm />}
          </div>
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default AdminProfile;
