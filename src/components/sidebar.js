import React,{useState} from 'react'
import { SideBarData } from './sideBarData';
import login from './login.png'
import { Icon } from '@fluentui/react/lib/Icon';
import { IconButton } from '@fluentui/react/lib/Button';

export default function Sidebar() {
  const [exitSidebar,setExitSidebar] = useState(false)
  return (
    <>
    {!exitSidebar ? (
    <div className='SideBar'>
      <div style={{height:"10%",position:"relative"}}>
         <img src={login} id="image" alt="login" />
         <div className='welcome'>
          Welcome
          <span className='back'>
          <Icon iconName="NavigateBack" onClick={(e)=>{setExitSidebar(true)}} />
          </span>
          </div>
      </div>
      <ul className='SidebarList'>
        {SideBarData.map((val,key)=>{
          return(
            <li key={key} 
            onClick={()=>{window.location.pathname = val.link}}
            className='row'
            id={window.location.pathname === val.link ? "active" : ""}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
    ) 
    : 
    <IconButton iconProps={{ iconName: 'CollapseMenu' }} style={{fontSize:"30px"}} onClick={(e)=>{setExitSidebar(!exitSidebar)}} />
  }
    </>
  )
}
