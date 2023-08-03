import React, { useState, useEffect } from 'react'
import { TableComponent } from '../../component';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, postData } from '../../redux/action';

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const param1 = queryParams.get('email');
  const { loading, dataTable, error } = useSelector((state) => state.Data);
  console.log(dataTable, "dataTable");

  const [data, setData] = useState("data")
  const [dataRow, setDataRow] = useState([
    { id: 1, no: 101, name: 'John Doe', class: 'A' },
    { id: 2, no: 102, name: 'Jane Smith', class: 'B' },
    { id: 3, no: 103, name: 'Michael Johnson', class: 'C' },
    { id: 4, no: 103, name: 'Michael Hashfi', class: 'A' },
    // Add more objects as needed
  ])
  const tableCol = [
    { column: 'id', field: 'id' },
    { column: 'name orang', field: 'name' },
    { column: 'kelas', field: 'class' },
    // { column: 'action', field: 'id' },
  ]

  const addNewDataRow = (params) => {
    setDataRow((prevData) => [...prevData, params]);
    dispatch(postData({
      "name": "hashfi",
      "job": "leader",
      "id": "268",
      "createdAt": "2023-08-03T06:18:49.336Z"
    }))
  }

  function ChangeStateData(params) {
    setData(params)
  }

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);


  return (
    < div className='container pt-5 vh-100'>
      <div className='h1 text-primary '>{data}</div>
      <div onClick={() => ChangeStateData("data manipulating pakai function")}>data manipulating pakai function</div>
      <button className='btn btn-primary' onClick={() => addNewDataRow(
        { id: 4, no: 103, name: 'Michael Jackson', class: 'C' }
      )}>
        add
      </button>
      <div className='text-danger'>email: {param1}</div>
      <TableComponent column={tableCol} row={dataRow} />
    </div>

  )
}

export default HomePage