import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon';

export default function TableTile() {
  return (
<div className='tile-box-2'>
          <span className='heading'> Recent Transaction </span>
          <table className='dashboard-table'>
            <tbody>
              <div className='table-design'>
              <tr>
                <td style={{fontSize:"large",paddingRight:"100px"}}>25 Aug 2023 </td>
                <td className='credit'>
                <Icon id="down" iconName="Down" /> 
                <span style={{fontSize:"large"}}> <b>₹ 1000</b></span>
                </td>
                <td className='debit'>
                <Icon id="up" iconName="Up" /> 
                <span style={{fontSize:"large"}}> <b>₹ 1000</b></span>
                </td>
              </tr>
              </div>
              <div className='table-design'>
              <tr>
                <td style={{fontSize:"large",paddingRight:"100px"}}>25 Aug 2023 </td>
                <td className='credit'>
                <Icon id="down" iconName="Down" /> 
                <span style={{fontSize:"large"}}> <b>₹ 1000</b></span>
                </td>
                <td className='debit'>
                <Icon id="up" iconName="Up" /> 
                <span style={{fontSize:"large"}}> <b>₹ 1000</b></span>
                </td>
              </tr>
              </div>
            </tbody>
          </table>
        </div>  )
}
