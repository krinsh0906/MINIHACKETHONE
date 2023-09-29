
import React from "react";
import { useState } from "react";
import "./contactus.css";

function Contactus() {
  const [fname,setFname]=useState('');
  const [fnameErr,setFnameErr]=useState(false);

  const [lname,setLname]=useState('');
  const [lnameErr,setLnameErr]=useState(false);

  const [messagename,setMessagename]=useState('');
  const [messagenameErr,setMessagenameErr]=useState(false);

  const [emailname,setEmailname]=useState('');
  const [emailnameErr,setEmailnameErr]=useState(false);
 


  const FnameHandle = (e) => {
      let fitem = e.target.value;
      if (fitem.length >= 2 && fitem.length <= 7 || fitem.length ==0) {
          setFnameErr(false)
      }
      else  
      {
          setFnameErr(true)
      }    
          setFname(fitem)
  }
      const valueHandale = (e) => {
          e.preventDefault();
          if(fnameErr === true || fname.length==0)
          {
              alert(' First Name invalid')
          }
          if(lnameErr === true|| lname.length==0)
          {
              alert('Last Name invalid')
          }
          if(emailnameErr === true|| emailname.length==0)
          {
              alert(' Email invalid')
          }
          if(messagenameErr === true|| messagename.length==0){
              alert('Message  invalid')
          }
          
  }
          const submitForm = () =>{
              if(fnameErr === true || fnameErr === true || messagenameErr === true || emailnameErr === true  || fname.length || lname.length || messagename.length  || emailname.length){
                  document.getElementById('Failmessage').innerHTML = "registrtion unsuccessful";
                  document.getElementById('Failmessage').style.dispaly ="block"
                  document.getElementById('Passmessage').style.dispaly ="none"
              } else{
                  document.getElementById('Passmessage').innerHTML = "registrtion successful";
                  document.getElementById('Passmessage').style.dispaly ="none"
                  document.getElementById('Failmessage').style.dispaly ="block"
              }
          }
      const LnameHandle = (e) => {
          console.log(lname)
          let litem = e.target.value;
          
          if (litem.length >= 2 && litem.length <= 8  || litem.length ==0) {
              setLnameErr(false)
          }
          else  {
                  setLnameErr(true)
              }
              setLname(litem)
      }
      
      const MessagenameHandle = (e) => {        
    
      let Messageitem = e.target.value;
    
      if(Messageitem.length==0){
          setMessagenameErr(false)
      }
      setMessagename(Messageitem)   
      }

  const EmailnameHandle = (e) => {
      let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      let emailitem = e.target.value;
      setEmailnameErr(!(regex.test(emailitem)))
      if (emailitem.length == 0){
          setEmailnameErr(false)
      }
       setEmailname(emailitem)
  }

  
  return (
    <>
    <hr className="contactus-line"/>
    <div className="contactus-containor">
    <div className="contactus-heading">
      <h1>Contact</h1>
      <div className="contactus-form">
        < form onSubmit={valueHandale}>
          <div>

            <input type="text" placeholder="Enter Your First Name" onChange={FnameHandle} className="contact-input1"></input> 
      
            <input type="text" placeholder="Enter Your Last Name" onChange={LnameHandle} className="contact-input1 contact-space"></input>
          
          </div>
          <div>
          {fnameErr?<span className="ErrorMessege"> First Name Invalid</span>:""}
          {lnameErr?<span className="Lname">Last Name Invalid</span>:""}
          </div>
          

          <div className="space">
            <input type="email" placeholder="Enter Your Email"onChange={EmailnameHandle} className="contact-input"></input><br/>{emailnameErr?<span className="ErrorMessege">Email Invalid</span>:""}<br/>
          </div>

          <div className="space">
            <textarea rows={6} placeholder="Enter Your Message" onChange={MessagenameHandle} className="contact-input2"></textarea>{messagenameErr?<span className="ErrorMessege">Message Invalid</span>:""}
          </div>
          <div>
            <button type="Submit" onSubmit={submitForm}  className="contact-input-submit ">Submit</button>
          </div>
          
        </form>
      </div>

        
        
        </div>
      </div>
      </>
  
  );
}

export default Contactus;
