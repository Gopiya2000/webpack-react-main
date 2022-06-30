import { Button, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router';
import {useStyles,fieldTypography,authSubmit,changeButton} from '../styles/styles';


const Auth = () => {
  const classes = useStyles()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    date: "",
    password: "",
    confirm: ""
  })
  const [isSignup, setIsSignup] = useState(false)
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendRequest = async (type="login") => {
    const res = await axios.post(`http://localhost:4567/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      username: inputs.username,
      mobile: inputs.mobile,
      date: inputs.date,
      password: inputs.password,
      confirm: inputs.confirm
    }
    ).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
    if(isSignup){
      sendRequest("signup")
      .then(()=>dispatch(authActions.login()))
      .then(()=>navigate("/blogs"))
      .then(data => console.log(data))
    }
    else{
      sendRequest()
      .then(()=>dispatch(authActions.login()))
      .then(()=>navigate("/blogs"))
      .then(data => console.log(data))
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box className='classes.submitForm' >
          <Typography variant='h4'style={fieldTypography}>
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {/* <Grid container></Grid> */}
          {isSignup && <TextField name='name' onChange={handleChange} value={inputs.name} placeholder='name' margin='normal' />}
          {isSignup && <TextField name='email' onChange={handleChange} value={inputs.email} type={"email"} placeholder='email' margin='normal' />}
          <TextField name='username' onChange={handleChange} value={inputs.username} placeholder='username' margin='normal' />
          {isSignup && <TextField name='mobile' onChange={handleChange} value={inputs.mobile} placeholder='mobile' margin='normal' />}
          {isSignup && <TextField name='date' onChange={handleChange} value={inputs.date} placeholder='date' margin='normal' />}
          <TextField name='password' onChange={handleChange} value={inputs.password} type={'password'} placeholder='password' margin='normal' />
          {isSignup && <TextField name='confirm' onChange={handleChange} value={inputs.confirm} type={'password'} placeholder='confirm password' margin='normal' />}
          <Button
            type='submit'
            variant='contained'
            style={authSubmit}
          >
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            style={changeButton}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth;

//name, email, username, mobile, date, password, confirm