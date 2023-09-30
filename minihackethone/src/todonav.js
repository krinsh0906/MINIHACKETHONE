import React from 'react';
import {FiLogOut} from 'react-icons/fi'

function Todonav() {
    return (
        <div className='todonav-container'>
            <nav className='todo-nav'>
                <div className='logo'>
                    <h2>
                        DAILY AGENDA.
                    </h2>
                </div>
                <div className='main-link'>
                    <ul>
                        <li ><a  className='' href='#'>Lists</a></li>
                    </ul>
                </div>
                <div className='main-link1'>
                <ul >
                        <li ><a  className='space1' href='#'>About</a></li>
                        <li ><a  className='' href='#'>Help me</a></li>
                        <li ><a  className='' href='#'>Log out <FiLogOut className='icon'/></a></li>
                        
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Todonav;
