import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { useEffect,useState } from 'react';
import { useLocation } from "react-router-dom";
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
          <img src="#" alt="Profile Picture"></img>
          <h3 className="card-title">
            <strong>{currentUser.username}</strong>
          </h3>
          <p>
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