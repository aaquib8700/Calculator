import React, { useState } from 'react'

const App = () => {
  const arr=['1','2','3','4','5','6','7','8','9','0','+','-','/','*','=','C','.'];
  const [value, setValue] = useState('');

  const handleChange=(e)=>{
    setValue(e.target.value);    
  }

  const handleClick=(e)=>{
    const id=e.target.id;
    if(id==='C'){
      setValue('');
    }
    else if(id==='='){
      handleSubmit(e);
    }
    else{
      setValue((val)=>val+id)
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
      const ans=eval(value);
      setValue(ans);
    }
    catch (error) {
      alert("Invalid Inputs");
    }
  }

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <h1 className='font-bold text-2xl font-sans text-violet-900 mt-5 mb-5'>CALCULATOR</h1>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value} className='border-2 w-[280px] h-[40px] text-lg' type="text" />
      </form>
      <div onClick={handleClick} className='mt-10 grid grid-cols-4 w-[50vh] h-[50vh]  gap-3'>
        {
          arr.map((item,index)=>(
            <button id={item} className='bg-violet-400 rounded-md font-semibold text-xl cursor-pointer' key={index}>{item}</button>
          ))
        }
      </div>
    </div>
  )
}

export default App