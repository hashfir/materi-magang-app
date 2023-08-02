import React, { useState } from 'react'
import ChildrenHomepage from './children-home'
import './home-styling.css'
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [data, setData] = useState("data")
  const [data2, setData2] = useState("data2")

  const param1 = queryParams.get('email');

  function ChangeStateData(params) {
    //get api
    //ubah value manipulate
    setData(params)
    
  }

  return (
    <>
      <div className='h1 text-primary '>{data}</div>
      <div className='bg-danger' onClick={() => setData2("data 2333333")}>test ubah data</div>
      <div onClick={() => ChangeStateData("data manipulating pakai function")}>data manipulating pakai function</div>
      
      <div className='text-danger'>email: {param1}</div>
      <ChildrenHomepage
      name ={data2}
      />
    </>

  )
}

export default HomePage