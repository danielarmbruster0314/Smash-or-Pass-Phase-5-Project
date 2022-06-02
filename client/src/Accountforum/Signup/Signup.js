import React, { useState, useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../Common";
import { Marginer } from "../Marginer";
import { AccountContext } from "../AccountContext.js";
import './Signup.css'
import { useNavigate } from 'react-router-dom';

export function SignupForm({setUser}) {
  const { switchToSignin } = useContext(AccountContext);
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate();

function handleCreateAccount(e){
  e.preventDefault();
  fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username: username, email: email, password: password, password_confirmation: confirmpassword  }),
  })
    .then((r) => {
      if (r.ok){
        r.json().then((data) => {
          setUser(data)
          navigate('/landingpage')
        })
      }else{
        r.json().then((error)=> setError(error))
      }})
}



  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
        <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        {error?
        (
          <p className="signup_errors">{error.errors}</p>
        ):null  
      }
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton className='signup_button' type="submit" onClick={(e)=>handleCreateAccount(e)}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" style={{paddingBottom: '10px'}}>
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin} >
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}