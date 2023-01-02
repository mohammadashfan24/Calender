import React, { useState, useEffect } from 'react';
import Hours from '../Hours/Hours';
import InputDialog from '../InputDialog/InputDialog';
import './Calender.css';
function Calender() {
  const weekNames = ['Sun', 'Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat'];
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const hours = 24;

  const renderHours = () => {
    let arr = [];
    for(let i = 1; i <= hours; i++) {
        arr.push(<Hours data={i} onClick={handleClick}/>)
    }
    return arr;   
  }

  const handleClick = (e) => {
    console.log(e)
    setOpen(!open);
  }


  const addEvent = (item) => {
    console.log(item)
  }

  return (
    <div className='container'>
        <div className='weeksContainer'>
            {weekNames.map(week => {
                return(
                    <div className='weekWrapper'>
                    <div className='week'>{week}</div>
                    {renderHours()}
                    </div>
                )
              
            })}
            
        </div>
        <InputDialog open={open} handleSubmit={addEvent}/>
    </div>
  )
}

export default Calender