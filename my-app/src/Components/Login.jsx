import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { AiFillEye } from "react-icons/ai";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  InputGroup,
  InputRightElement,

} from "@chakra-ui/react";
const Login = () => {
  // Navigation for Redirect next page
  // SHow hook for Password hide show func
  const navigate=useNavigate()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  // custome hooks for User fields
  let data = JSON.parse(localStorage.getItem("profile"));
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [log,setLog]=useState(false)
  // Login Logic for Existing user 
  const handleLogin = () => {
    console.log(data);
      if (data.userName === userName && data.password === password) {
        localStorage.setItem("profile",JSON.stringify(data))
        localStorage.setItem("Token",JSON.stringify(Math.floor(1000 + Math.random() * 9000)))
        setLog(true)
        console.log(log+"first")
        // window.location.reload();
        alert("Login Successfully");
        navigate("/")
      }
      else if(log===false){
        alert("Username or Password Wrong")
      }
  };
  return (
    <div className={style.main}>
      <div></div>
      <div>
        <div>
          <center>
            <span
              style={{
                height: "120px",
                width: "120px",
                backgroundColor: "blue",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
          </center>
        </div>
        <div>Hii Welcome to our Login portal..</div>
        <FormControl>
          <FormLabel>UserName</FormLabel>
          <Input type="text" onChange={(e) => setUserName(e.target.value)} />
          <FormLabel>Password</FormLabel>
          <InputGroup size='md'>
      <Input
      onChange={(e)=>setPassword(e.target.value)}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <AiFillEye h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </AiFillEye>
      </InputRightElement>
    </InputGroup>
          <Box p="5">
            <Button
              bg="blue"
              paddingLeft={"220px"}
              paddingRight="220px"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          <Box>
            Don't have Account ? <Link to="/signup" style={{ color: "blue" }}>Sign up</Link>
          </Box>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;