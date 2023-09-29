import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    const [users, setUsers] = useState([{
        FirstName: "" ,LastName: "", Email: "" , password:""
    }])    
    const {id} =useParams();
    const [fname, setFname] = useState('');
    const [fnameErr, setFnameErr] =useState(false);
    const [lname, setLname] =useState('');
    const [lnameErr, setLnameErr] =useState(false);
    const [email, setEmail] =useState('');
    const [emailErr, setEmailErr] =useState(false);
    const [password, setPassword] =useState('');
    const [passwordErr, setPasswordErr] =useState(false);
    const navigate = useNavigate ();

    // const navigate = useNavigate ();

    const Submit = async (e) => {
        e.preventDefault();
    
        try { 
          const result = await axios.post(('http://localhost:3002/createUser'), {fname,lname, email, password})
          navigate('/')
        } catch(err){
        console.log(err)
        
      }
    }

    const fnameHandle = (e) => {
      let item =e.target.value;
      if (item.length >=3 && item.length <=7 || item.length==0) {
          setFnameErr(false)
      }
      else {
          setFnameErr(true)
      }
      setFname(item)
  }
    const fnamevaluehandle = (e) => {
      e.preventDefault();
      if (fnameErr == true || fname.length==0){
      alert("first name is Invalid")
      }
      if (lnameErr == true || lname.length==0){
          alert("last name is Invalid")
          }
          if (emailErr == true || email.length==0){
              alert("email is Invalid")
              if (passwordErr == true || password.length==0){
                alert("Password is Invalid")
              }
               }
                }
                const lnameHandle = (e) => {
                  let item =e.target.value;
                  if (item.length >=5 && item.length <=9 || item.length==0 ) {
                      setLnameErr(false)
                  }
                  else {
                      setLnameErr(true)
                  }
                  setLname(item);
              }
              const valuesHandle = () => {
                  if (lnameErr == true);
                  {
                      alert('your Last name is Invalid');
                  }
              }
              const emailHandle = (e) => {
                   let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g 
                   let emailvalue = e.target.value;
                   setEmailErr(!(regex.test(emailvalue)));
                   setEmail(emailvalue); 
          
                   if(emailvalue.length==0){
                      setEmailErr (false)
                   }  
              }
              
    const passwordHandle = (e) => {
    e.preventDefault();
    let password =e.target.value;
    if (password.length >=6){
        setPasswordErr(false)
    }
    else {
        setPasswordErr (true);
    }
    setPassword(password)
  };


     const SubmitForm = () => {
                if (fnameErr === true || lnameErr === true || emailErr === true|| passwordErr===true || fname.length === 0 || lname.length === 0 || email.length === 0 || password.length === 0){
                    document.getElementById('FailMessage').innerHTML = "SignUp Unsuccessful";
                    document.getElementById('FailMessage').style.display="block"
                    document.getElementById('PassMessage').style.display="none"
                } else {
                    document.getElementById('PassMessage').innerHTML = "SignUp Successful";
                    document.getElementById('PassMessage').style.display="block"
                    document.getElementById('FailMessage').style.display="none"
                }
            }


  return (
        <div className='logo'>
            <h2>DAILY AGENDA</h2>
            <h1 className='confarg'>SignUp.</h1>
                
    <div className='container'>
                <div className='PassMessage' id='PassMessage'></div>
                <div className='FailMessage' id='FailMessage'></div>
        <div className='SignUpform'>
            
            <div className='SignUpcontainer'>
                <form onSubmit={ Submit}>
                    <div className='sign-upform'>
                    <div className='space'>
                    <label className='form'>FirstName</label><br/>
                    <input type='Name' onChange={fnameHandle} className='input1' placeholder='Enter your FirstName'/><br/>{fnameErr?<span className='ErroeMessage'>First Name Invalid</span>:""}
                    </div>
                    <div className='space'>
                    <label className='form'>LastName</label><br/>
                    <input type='Name' onChange={lnameHandle} className='input1' placeholder='Enter your LastName'/><br/>{lnameErr?<span className='ErroeMessage'>Last Name Invalid</span>:""}
                    </div>
                    <div className='space'>
                    <label className='form'>Email</label><br/>
                    <input type='email'onChange={emailHandle} className='input1' placeholder='Enter your Email'/><br/>{emailErr?<span className='ErroeMessage'>Email Invalid</span>:""}
                    </div>
                    <div className='space'>
                    <label className='form'>password</label><br/>
                    <input type='password' onChange={passwordHandle} className='input1' placeholder='Enter your Password'/><br/>{passwordErr?<span className='ErroeMessage'>Password Invalid</span>:""}
                    </div>
                    <div className='login-already'>
                    <p className='files'>Already have an account? <a href=''>Login</a></p>
                    <button type="submit"  onSubmit={SubmitForm}>SignUp</button>
                    <tbody>
                        {
                            users.map((user)=> {
                                return (<tr>
                                    <td>{user.FirstName}</td>
                                    <td>{user.LastName}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.password}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                    </div>
                    </div>
                    
                </form>
               </div>
            </div>
         </div>
        </div>
  )
}

export default SignUp