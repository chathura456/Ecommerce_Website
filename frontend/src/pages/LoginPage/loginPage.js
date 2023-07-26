import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import "./loginPage.scss";

const LoginPage = () => {
  
    return (
      <div className = "home-page">
        <Slider />
        <Link to = "/user" className="navbar-btn">Logged user</Link>
      </div>
      
    )
}

export default LoginPage;

