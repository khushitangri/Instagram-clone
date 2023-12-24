import React,{useState} from 'react'

const Input = () => {
    const [input,setInput]=useState('')
const ChangeInput=(e)=>{
    const arr = e?.target?.value;
    setInput(arr)
    console.log(arr)
}
  return (
    <div className='bg-black p-10'>
      <input type="text" value={input} onChange={ ChangeInput} />
    </div>
  )
}

export default Input
