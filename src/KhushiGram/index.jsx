import React, { createContext } from 'react'
import LeftGram from './LeftGram'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './index.css'
import Centergram from './CenterGram'
import RightGram from './RightGram'
const Apis = createContext()
const StateHandle = createContext()
const KhushiGram = () => {
  const [one, setOne] = useState();
useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      const arr = res?.data.users;
      setOne(arr);
    });
  }, []);

  return (
    <div className='KhushiGram'>
      <Apis.Provider value={one}>
      <LeftGram/>
      </Apis.Provider>
        <Apis.Provider value={one}>
      <Centergram/>
      </Apis.Provider>
      <RightGram/>
    </div>
  )
}
export default KhushiGram;
export {Apis,StateHandle}