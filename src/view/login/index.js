import React,{useState} from 'react'
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import Dashboard from  '../dashboard/index';
import login from './login.png'
import { Link } from 'react-router-dom'

export default function Index() {
  const [loginflg,setLogin]=useState(false)
  console.log("NNNNNNNNNNNNNNNNNNN",loginflg)
  if(loginflg===true){
    return (
    <>
    <Dashboard/>
    </>
    )
  }
  
  return (
    <div className='BoxShadow'>
    <form className='LoginForm'>
        <div style={{textAlign:"center"}}>
          <img src={login} style={{height:"70px"}} alt="login" />
        <div>
          <b> LOGIN </b> 
        </div>
        </div>
        <div style={{marginBottom:"10px"}}>
          <TextField label="User Name" type="text" inputmode="numeric" placeholder="Phone Number" />
        </div>
        <div style={{marginBottom:"10px"}}>
          <TextField label="Password"
          type="password"
          canRevealPassword
          revealPasswordAriaLabel="Show password" /> 
        </div>
        <div className='LoginBtn'>
          <PrimaryButton style={{width:"100%"}} text="Sign In"  allowDisabledFocus 
           onClick={()=>{
            setLogin(!loginflg)
           }}
          />
        </div>
        <div className='Register'>
          Not a member? <b>
              <Link to='/register'>
                  Register
              </Link>
            </b>
        </div>
    </form>
    </div>
  )
}
