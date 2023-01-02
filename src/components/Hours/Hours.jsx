import React, { useState } from 'react'
// import FormDialog from '../InputDialog/InputDialog';
import './Hours.css';
function Hours({ data, onClick }) {
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);

  const [updateTitle, setUpdateTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleClick = () => {
    if(updateTitle === '') {
        setUpdateTitle(title);
    }
    else {
        setUpdateTitle(''); 
    }
    setTitle('');
  }

  const btnCTA = updateTitle === '' ? 'Add' : 'Remove';
  return (
    <>
        <div className='hours'>{updateTitle || data}</div>
        {updateTitle === '' && <input value={title} type='text' onChange={handleChange}/>}
        <button onClick={handleClick}>{btnCTA}</button>
    </>
  )
}

export default Hours