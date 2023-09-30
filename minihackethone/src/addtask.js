import React from 'react';

function Addtask() {
    return (
        <div>
            <div className='addtask-containor'>
                <div className='addtask-headding'>
                    <h2> Add Task.</h2>
                <form className='addtask-form'>
                    <div>
                        <label>Title:-</label><br/>
                        <input className='main-inpute' type='text' placeholder='Add Title'></input>
                    </div>
                    <div>
                        <label>Add task:-</label><br/>
                        <textarea className=' main-inpute'rows={4} placeholder='Add Your Task'></textarea>
                    </div>
                    <button className='button'>Add</button>

                </form>

                </div>
            </div>
        </div>
    );
}

export default Addtask;
