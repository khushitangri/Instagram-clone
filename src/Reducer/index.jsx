import React,{useReducer, useState} from 'react'

const Reducer = () => {
    // const [number,setNumber ]= useState(0);
    const reducerFunction=(count, action)=>{
        switch(action.type){
            case "INCRE":
                return count+1
                case "DECRE":
                    return count-1
                    default:
                    return count;
        }

    }
 const[count, dispatch]=useReducer(reducerFunction,0)
    const handleClick=()=>{
    dispatch({type:"INCRE"})
    }
    const handleMinus=()=>{
        dispatch({type:"DECRE"})

    }
   
  return (
    <div className='text-center mt-60'>
      <button className='text-[30px]' onClick={handleClick}>+</button>
      <h1 className='text-[50px]'>{count}</h1>
      <button className='text-[30px]' onClick={handleMinus}>-</button>
    </div>
  )
}
export default Reducer;
