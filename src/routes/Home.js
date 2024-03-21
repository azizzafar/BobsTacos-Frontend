import React from 'react';
import Navbar from '../components/header/Navbar';
import Main from '../components/Main';
import Footer from '../components/footer/Footer';
import DeliveryCollections from '../components/Delivery/DeliveryCollection/DeliveryCollections';
import Profile from './Profile';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Main 
        MainImg= "https://bobstacos.com/wp-content/uploads/2016/08/logo-white-shadow-004.png"
        title="BOBS TACOS!!"
        text="Dear BOBS TACOS is a online web app where you can find your tasty food easily!"
        buttonText="Order Online"
        url="/item"
        btnclass="show"
      />   
      <DeliveryCollections />
      <Footer />
    </>
  )
};

export default Home;
