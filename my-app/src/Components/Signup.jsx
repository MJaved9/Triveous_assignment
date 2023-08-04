import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import style from "./signup.module.css";
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

const Signup = () => {
  // Navigate for Next page Redirect
  // Show and hide password for show hook
  const navigate=useNavigate()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  // Here is some fields for User Input hooks
  let data = JSON.parse(localStorage.getItem("Account"));
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName,setFullName]=useState("")
  const [email,setEmail]=useState("")
  const [confirmpassword,setConfirmPassword]=useState("")

  // Here is Signup Logic for Create Account
  const handleSignup = () => {
    let payload={userName,fullName,email,password,confirmpassword}
    if(!(userName&&fullName&&email&&password&&confirmpassword)){
      alert("Please Enter Details")
    }
    else{
      localStorage.setItem("profile",JSON.stringify(payload))
      alert("Account Created..")
      navigate("/login")
    }
  };
  const checkPass=()=>{
    if(password!==confirmpassword){
      alert("Confirm Password dose not Match with Enter Password")
    }
    else{
      return true
    }
  }
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
      <div>Hii Welcome to our Sign up portal..</div>
      <FormControl>
        <FormLabel>UserName</FormLabel>
        <Input type="text" onChange={(e) => setUserName(e.target.value)} />
        <FormLabel>FullName</FormLabel>
        <Input type="text" onChange={(e) => setFullName(e.target.value)} />
        <FormLabel>Email</FormLabel>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
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
  <FormLabel>Confirm Password</FormLabel>
        <InputGroup size='md'>
    <Input
    onChange={(e)=>setConfirmPassword(e.target.value)}
    onBlur={checkPass}
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
            onClick={handleSignup}
          >
            Login
          </Button>
        </Box>
        <Box>
          Already have Account ? <Link to="/login" style={{ color: "blue" }}>Login</Link>
        </Box>
      </FormControl>
    </div>
  </div>
  )
}

export default Signup