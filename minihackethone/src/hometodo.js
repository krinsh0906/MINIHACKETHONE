import React from 'react';
import todo1 from './assest/todo2.jpg'
function Hometodo() {
    return (
        <>
            <hr className='todo-line'></hr>
            <div className='maintodo-container'>

                <div className='todo-logo'>
                    <h2>Todo List</h2>

                </div>
                <div className='todo-text'>
                    <p>Todolist is a simple and effective tool used for task management and organization.<br /> To-do lists are commonly used in both personal and professional settings to help<br /> people stay organized, manage their time efficiently, and ensure important tasks<br /> are not forgotten.</p>
                    <div className='todo-button'>
                        <button className='button' type='submit'>Get Start</button>
                    </div>
                </div>

                <div className='todo-img' >
                    <img className='todo-vactor' src={todo1}></img>
                </div>
            </div>
        </>
    );
}

export default Hometodo;
