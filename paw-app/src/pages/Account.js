import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { useEffect,useState } from 'react';

function AccountPage() {
  const [currentUser, setCurrentUser] = useState('');


  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if(user){
      setCurrentUser(user);
    }
  },[]);
  return (
    <div className="container">
          <h3>
            <strong>{currentUser.username}</strong>
          </h3>
    </div>

  );
};

export default AccountPage;