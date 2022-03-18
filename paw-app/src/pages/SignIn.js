import "./CssPages/SignIn.css";
import React, { Component, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginFunction() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
    	return email.length > 0 && password.length > 0;
    }
        return (
            <form>
                <div className='form-group'>
                    <div className='layer-group'>
                        <div className='label'>
                            <h3><span class='login'>Login</span> or <span class='signup'>Signup</span></h3>
                        </div>

                        <div className="email-group">
                            <label><i class='icon-us'><span class='email-label'>Email</span></i></label>
                            <input type="email" className="email-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </div>

                        <div className="password-group">
                            <label><i class='icon-lock'><span class='password-label'>Password</span></i></label>
                            <input type="password" className="password-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                        </div>

                        <div className="checkbox-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <div className='submit-group'>
                            <button type="submit" className="SignInBtn" disabled={!validateForm()}>Sign in</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
