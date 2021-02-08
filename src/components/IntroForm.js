import { useState } from 'react';

const IntroForm = ({ name,enterName,setName,toggleGreet }) =>{

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!name){
            alert('Please add name');
            return;
        }
        enterName(name);
    }

    return(
        <form className='add-form' onSubmit={onSubmit}>
              <div className='form-control'>
                <label>Name</label>
                <input
                  type='text'
                  placeholder='Enter Name'
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                />
              </div>
              <button className="btn" type="submit" onClick={toggleGreet}>Hello Bot.</button>
        </form>
    )
}

export default IntroForm;