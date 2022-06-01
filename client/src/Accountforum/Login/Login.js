import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../Common";
import { Marginer } from "../Marginer";
import { AccountContext } from "../AccountContext";
import './Login.css';
import { useNavigate } from 'react-router-dom';



export function LoginForm({setUser}) {
  const { switchToSignup } = useContext(AccountContext);
  const[username, setUserName] = useState(null)
  const [password, setPassword] = useState(null)
  const[error, setError] = useState(null)
  const navigate = useNavigate();

function handleSubmit(e){
	e.preventDefault();
		fetch("/login", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
		.then((r) => {
			if (r.ok){
				r.json().then((user) => setUser(user))
				navigate('/landingpage')
			}else{
				r.json().then((error)=> setError(error) )
			}
		})
}

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="username" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        {error? (
          <p className="login_error">{error?.errors}</p>
        ): null}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton className="login_button" type="submit" onClick={(e)=>handleSubmit(e)}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

