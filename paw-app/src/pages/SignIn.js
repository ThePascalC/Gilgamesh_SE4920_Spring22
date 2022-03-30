import "./CssPages/SignIn.css";
import React, { Component, useState } from 'react';
import Googlelogo from '../path/google.png';
import AppleLogo from '../path/apple.png';
import FaceLogo from '../path/facebook.png';
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
                        <h3><span class='login'>Login to Pawsible</span></h3>
                    </div>
                    <div className='button-Google' >
                        <button type="submit" className="app-signIn"><img src={Googlelogo} className='googleLogo' />Sign In with Google</button>
                    </div>
                    <div className='button-Apple'>
                        <button type="submit" className="app-signIn"><img src={AppleLogo} className='appleLogo' />Sign In with Facebook</button>
                        </div>
                    <div className='button-Facebook'>
                        <button type="submit" className="app-signIn"><img src={FaceLogo} className='faceLogo'/>Sign In with Apple</button>
                    </div>
                    <h1 className="dashline">OR</h1>
                    <div className="email-group">
                        <label><i class='icon-us'><span class='email-label'></span></i></label>
                        <input type="email" className="email-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </div>

                    <div className="password-group">
                        <label><i class='icon-lock'><span class='password-label'></span></i></label>
                        <input type="password" className="password-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
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
