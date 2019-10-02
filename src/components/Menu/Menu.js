import React from 'react';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './Menu.css'

const Menu = ({updateState}) => {
    return (
        <aside>
            <button className='nav-buttons' onClick={() => updateState(local)}>Local News</button>
            <button className='nav-buttons' onClick={() => updateState(health)}>Health</button>
            <button className='nav-buttons' onClick={() => updateState(entertainment)}>Entertainment</button>
            <button className='nav-buttons' onClick={() => updateState(science)}>Science</button>
            <button className='nav-buttons' onClick={() => updateState(technology)}>Technology</button>
        </aside>
    )
}


export default Menu;