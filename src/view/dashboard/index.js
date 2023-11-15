import React,{useState} from 'react'
import Sidebar from '../../components/sidebar';
import { IconButton } from '@fluentui/react/lib/Button';
import FirstTile from "./title";
import TableTile from "./tableTile";
import UpcomingTransaction from "./upcomingTransaction"

export default function Dashboard() {
const [collaps,setCollaps] = useState(true);

const sidebarUi = () =>{
  if (collaps){
    return <Sidebar props={collaps} />
  }
  else {
    <IconButton iconProps={{ iconName: 'CollapseMenu' }} onClick={(e)=>{setCollaps(true)}} />
  }
}
  return (
    <div style={{display:"flex"}}>
    <div className='Dashboard'>
      {sidebarUi()}
      <div className='Main-Grid'>
       <FirstTile/>
       <TableTile/>  
      </div>
      <UpcomingTransaction/>
      
      </div>
    </div>
  )
}
