import "./CssPages/GetStarted.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Googlelogo from '../path/google.png';
import AppleLogo from '../path/apple.png';
import FaceLogo from '../path/facebook.png';
function GetStarted() {
    const history = useNavigate();
    const [password, setPassword] = useState("");
    const [values, setValues] = useState({
        
    });
    const handelFormSubmit = (event) => {
        event.preventDefault();
    };
    // const [details, setDetails] useState({ name:})

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-253c7-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
            <form>
                <div className="container">
                    <div className='boxOne'>
                        <div>
                            <h2><span class='welcome'>Welcome To Pawsible</span></h2>
                        </div>
                        <div className="line"></div>
                        <div>
                            <p className='container-p'>Create an account to start finding a park fit <br></br>for your four legged friend</p>
                        </div>
                    </div>
                    <div className='app-box'>
                        <form className='form-wrapper'>
                            <div className='email'>
                                <input className='input' type='email' name='email' value={values.email}placeholder="Email Address" />
                            </div>
                            <div className='password'>
                                <input className='input'type='password' name='password' value={values.password}placeholder="Password" />

                            </div>
                            <div className='confirmPassword'>
                                <input className='input' type='password' name='confirmPassword' value={values.confirmPassword}placeholder="Confirm Password" />
                            </div>
                            <div>
                                <button className='submit' onClick={handelFormSubmit}>Get Started</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                
            </form>
    );
}

export default GetStarted;
