import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { useEffect,useState } from 'react';
import { useLocation } from "react-router-dom";
function AccountPage() {

  const location = useLocation()
  const { currentUser } = location.state
  console.log(currentUser)
  return (
    <div className="container-fluid">
      <div className="card" style={{margin: '0 auto', width: '60%'}}>
          <h3>
            <strong>{currentUser.username}</strong>
          </h3>
          <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
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
    </div>

  );
};

export default AccountPage;