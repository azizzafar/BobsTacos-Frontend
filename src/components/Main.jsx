import React from 'react';
import '../components/MainStyles.css';
import { Link } from 'react-router-dom';
import Profile from '../routes/Profile';


const Main = (props) => {
  return (
    <div className="container-img">
     
         <div className="Main-text">
           
            <Link to="/menu" className='btnclass'>
              <a href={props.url} className={props.btnclass}>{props.buttonText}    <i className="fa-solid fa-arrow-right"></i></a>
            </Link>
            
         </div>
         <img className='cover' src= {props.MainImg} alt="BobsTacosStaion" />
    </div>
  )
}

export default Main;