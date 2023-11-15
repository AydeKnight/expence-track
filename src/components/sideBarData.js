import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon';

export  const SideBarData = [
    {
        title:"Dashboard",
        icon: <Icon iconName="ViewDashboard" />,
        link:"/dashboard"
    },
    {
        title:"Transaction",
        icon: <Icon iconName="Money" />,
        link:"/transaction"
    },
    {
        title:"Reports",
        icon: <Icon iconName="ReportDocument" />,
        link:"/reports"
    },
    {
        title:"Settings",
        icon: <Icon iconName="Settings" />,
        link:"/settings"
    }
]
  