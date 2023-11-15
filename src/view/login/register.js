import React,{useState,useEffect} from 'react'
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Link } from 'react-router-dom'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [first_name,setFirstname] = useState("");
  const [last_name,setLastname] = useState("");
  const [user_name,setUsername] = useState("");
  const [email,setEmail] = useState("");

  const notify = () => toast.error("Please Fill your details!");
  const notifycnfpss = () => toast.error("Password is Not same!");


  const handleSubmit = (e) => {
    if(password.length === 0 || confirmPassword.length === 0 || first_name.length===0 || last_name.length === 0 || user_name.length === 0){
      notify()
    }
    if (password!==confirmPassword){
      notifycnfpss()
    }
  }
  return (
    <div className='RegisterForm'>
    <div className='BoxShadow'>
      <form className='RigesterForm'>
        <div style={{textAlign:"center"}}>
          <b> Register </b> 
        </div>
        <div>
        <TextField label="First Name" required value={first_name} onChange={ (e)=> setFirstname(e.target.value)} />
        </div>
        <div>
        <TextField label="Last Name" required value={last_name} onChange={ (e)=> setLastname(e.target.value)}/>
        </div>
        <div>
        <TextField label="User Name" required value={user_name} onChange={ (e)=> setUsername(e.target.value)}/>
        </div>
        <div>
        <TextField label="Email" type='email' placeholder='Optional' value={email} onChange={ (e)=> setEmail(e.target.value)}/>
        </div>
        <div>
        <TextField
          label="Password"
          type="password"
          canRevealPassword
          required
          revealPasswordAriaLabel="Show password"
          value={password}
          onChange={ (e)=> setPassword(e.target.value)}
        />
        </div>
        <div>
        <TextField
          label="Confirm Password"
          type="password"
          canRevealPassword
          required
          revealPasswordAriaLabel="Show password"
          value={confirmPassword}
          onChange={ (e)=> setConfirmPassword(e.target.value)}
        />
        </div>
        <div className='LoginBtn'style={{marginTop:"5px"}}>
          <PrimaryButton style={{width:"100%"}} text="Submit"  allowDisabledFocus onClick={()=>{handleSubmit()}} />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        </div>
        <div className='Register'>
          <b>
              <Link to='/'>
                  Already have an accound
              </Link>
            </b>
        </div>
      </form>
    </div>
    </div>
  )
}
