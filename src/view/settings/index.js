import React,{useState} from 'react'
import Sidebar from '../../components/sidebar';
import { IconButton } from '@fluentui/react/lib/Button';

export default function Settings() {
const [collaps,setCollaps] = useState(true)
  return (
    <div className='Dashboard'>
      { collaps ?
         <Sidebar props={collaps}/>
          :
        <IconButton iconProps={{ iconName: 'CollapseMenu' }} onClick={(e)=>{setCollaps(false)}} />
      }
    </div>
  )
}
