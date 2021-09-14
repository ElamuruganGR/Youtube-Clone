import { Home, Explore, Subscriptions, VideoLibrary } from '@material-ui/icons'
import React, { useState } from 'react'
import { NavRow, NavRow2 } from '../../molecules/navrow';
import './styles.css';

export function SideBar() {

    const [expanded, setExpanded] = useState(false);
    
    const MinifiedSideBar = (     
        <nav className="minified-sidebar">
            <NavRow Icon={Home} title={"Home"} />
            <NavRow Icon={Explore} title={"Explore"} />
            <NavRow Icon={Subscriptions} title={"Subscriptions"} />
            <NavRow Icon={VideoLibrary} title={"Library"} />
        </nav>        
    )

    const ExpandedSideBar = (
        <nav className="expanded-sidebar">
            <NavRow2 Icon={Home} title={"Home"} expanded="true"/>
        </nav>
    )

    return MinifiedSideBar;
}

