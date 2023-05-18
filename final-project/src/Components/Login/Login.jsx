import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {

  // console.log(props);
  const [user, setUser] = useState({
    'email':'',
    'password':''
  })
  const [errorMsg, setErrorMsg] = useState('')
  const [ErrorsList, setErrorsList] = useState([])

  let navigate = useNavigate();

  let sumbitFormData=async(e)=>{
    e.preventDefault();

    let validateResponse = validateFormData();
    console.log(validateResponse);

    if(validateResponse.error){
      //3ndy mo4kla
      setErrorsList(validateResponse.error.details)
    }else{
      // a3ml call le el API

    let {data} = await axios.post('https://sticky-note-fe.vercel.app/signin',user)
    
    // console.log(data);
    if(data.message == "success"){
      localStorage.setItem("token",data.token)
      saveUserData();
      goToHome();
    }else{
      setErrorMsg(data.message);
    }

    }
    
  }
  let validateFormData=()=>{
    const schema = Joi.object({
      email:Joi.string().required().email({tlds:{allow:['com','net']}}),
      password:Joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}/))
    })
    return schema.validate(user,{abortEarly:false})
  }

  let goToHome=()=>{
    navigate('/') 
  }

  let getInputValue=(e)=>{
    let myUser ={...user}
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser)
  }
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="m-auto w-75 py-5">
      <h2>Login Form</h2>
      {ErrorsList.map((error,index)=>
      <div key = {index} className='alert alert-danger p-2'>{error.message}</div>
      )}
      {errorMsg?<div className='alert alert-danger p-2'>{errorMsg}</div>:''}
      <form onSubmit={sumbitFormData}>
          <div className="input-data my-2">
            <label htmlFor="email">Email</label>
            <input onChange={getInputValue} type="email" className='form-control my-2' name="email" />
          </div> 
          <div className="input-data my-2">
            <label htmlFor="password">Password</label>
            <input onChange={getInputValue} type="password" className='form-control my-2' name="password" />
          </div>
          <div className="button w-100 d-flex flex-row-reverse">
          <button className='btn btn-info my-3'>Login</button>
          </div>
          

      </form>
      </div>
      
    
    </>
  )
}
