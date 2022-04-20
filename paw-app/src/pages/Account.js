import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { useEffect,useState } from 'react';
import { useLocation } from "react-router-dom";
import profile from '../path/Profile.jpg';
import doge from '../path/doge.jpg';
import './CssPages/Account.css';
function AccountPage() {
  function logOut(){
    AuthService.logout();
  }
  const location = useLocation()
  const { currentUser } = location.state
  console.log(currentUser)
  return (
    <div className="container-fluid">
      <div className="card" style={{margin: '0 auto', width: '40%', padding: '20px'}}>
          <img className="profile-pic" src={doge} alt="Profile Picture"></img>
          <h3 className="card-title">
            <strong>{currentUser.username}</strong>
          </h3>
          <p className="profile-id">
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <div className="card-text">
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        </div>
        <a href="/sign-in" className="btn btn-primary" onClick={logOut()}>
          Log Out
        </a>  
        </div>
    </div>

  );
};

export default AccountPage;