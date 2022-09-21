
 import React, { useState } from 'react'
 import './form.css'
 import image from '../assets/right-image.jpg'
 
 export default function Form() {
   const [userRegister ,setuserRegister] = useState({
        FullName: " ",
        ContactNo: " ",
        Email: " ",
        Message: " "
       });
       const [records ,setRecords] = useState([ ]);
  const handleInput = (e) => {
   //   const name = e.target.name;
   //   const value = e.target.value;
   //   console.log(name,value)
     setuserRegister({...userRegister, [e.target.name] : e.target.value})

  }
  const handleSubmit =(e) => {
    e.preventDefault();
    const newRecord = {...userRegister ,id: new Date().getTime.toString()}
       setRecords([...records , newRecord]);
       console.log(records);
  }
   return (
      <section className='outer'>
        <div className='formleft'>
       <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='FullName' autoComplete='null' placeholder='FullName' className='inputElements'
           value={userRegister.FullName} onChange = {handleInput}></input>
        <input type='text' name='ContactNo' autoComplete='null'placeholder='Contact Number' className='inputElements'
         value={userRegister.ContactNo} onChange = {handleInput}></input>
        <input type='text' name='Email' autoComplete='null' placeholder='Email' className='inputElements'
        value={userRegister.Email} onChange = {handleInput}></input>
        <input type='textarea' name='Message' rows="5" cols="5" autoComplete='null' placeholder='please share your thoughts with us!' className='messageElements'
        value={userRegister.Message} onChange = {handleInput}></input>
         <button id='button' className='submitbtn'> SUBMIT</button>
        
       </form>
       </div>
       <div className='formright'>
        <img src={image} className ='image'></img>

       </div>
      </section>
   )
 }
 
  
