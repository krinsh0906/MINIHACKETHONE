import React from 'react';
import login from './assest/login.jpg'


function Login() {
    return (
        <div>
            <nav className='main-nav'> 
                <div className='logo'>
                    <h2>DAILY AGENDA.</h2>
                </div>
                <div className='main-link'>
                    <ul>
                        <li><a className='space' href='#'>Login</a></li>
                        <li><a className='space' href='#'>Signpu</a></li>

                    </ul>
                </div>
            </nav>
            <div className='login-headding'>
            <h2>log in.</h2>
            </div>
        <div className='login-containor'>
        <div className='login-form'>
            <form>
                <div>
                    <label>Email:-</label><br/>
                    <input type='email' placeholder='Enter Your Email' className='login-input'></input>
                </div>
                 <div className='space'>
                     <label>Password:-</label><br/>
                        <input type='password' placeholder='Enter Your Password' className='login-input'></input>
                 </div>

                 <div className='login-page'>
                        Don't have an account?<a href=''>Signup</a>
                 </div>
                    <button className='login-button' type="submit">Login</button>
                </form>
            </div>
            
        </div>
        <div className='login-vactor'> 
            <img src={login}></img>
        </div>


    </div>
    


        
    );
}

export default Login;
