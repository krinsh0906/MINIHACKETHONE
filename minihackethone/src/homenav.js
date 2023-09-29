import React from 'react';
import {FaUserAlt} from 'react-icons/fa'
function Homenav() {
  return (
    <div>
       <nav className='main-nav'>
                {/* nav section */}
                <div className='logo'>
                    <h2>
                        DAILY AGENDA.
                    </h2>
                    {/* nav end */}
                </div>

                <div className='main-link'>
                    <ul>
                        <li ><a className='space' href='#'>Home</a></li>
                        <li ><a className='space' href='#'>TodoList</a></li>
                        <li ><a className='space' href='#'>Contact us</a></li>
                        <li><a href='#'><FaUserAlt/></a></li>

                    </ul>
                </div>

            </nav>
    </div>
  );
}

export default Homenav;
