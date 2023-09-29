import React from 'react';


function Login() {
    return (
        <div className='login-containor'>
            <div className='login-headding'>
                <h2>LOGIN</h2>
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


        </div>
    );
}

export default Login;
