import React from 'react';
import Text from '../../atoms/text';
import './styles.css'

export function NavRow({Icon, title}) {
    return (
        <div className={`nav-row flexed-column`}>
            <Icon className="menu-icon"/>
            <Text content={title}/>
        </div>
    )
}

export function NavRow2({Icon, title}) {
    return(
        <div className="nav-row flexed-row">
            <Icon className="menu-icon"/>
            <Text content={title}/>
        </div>
    )
}
