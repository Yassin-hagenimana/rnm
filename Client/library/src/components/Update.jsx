import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate} from 'react-router-dom'
import "../styles.css"
export default function Update() {
  const navigate=useNavigate()
  const location=useLocation()
  const bookId=location.pathname.split(("/")[2])
  console.log(bookId)

  const[book,setBook]=useState({
      title:"",
      desc:"",
      price:null,
      cover:""
  })

  const handleChange=async(e)=>{
    setBook((prev)=>({...prev,[e.target.name]:e.target.value}));

  }
  console.log(book)
  const handleClick=async(e)=>{
    e.preventDefault()
    try {
      await axios.put("http://localhost:8080/book"+bookId,book)
      navigate("/");
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className='form'>
    <h1>Update a Book</h1>
    <input type="text" placeholder="Title" name='title' onChange={handleChange}/>
    <input type="text" placeholder="Description" name='desc' onChange={handleChange}/>
    <input type="text" placeholder="Price" name='price' onChange={handleChange}/>
    <input type="text" placeholder="Cover" name='cover' onChange={handleChange}/>
    
    <button onClick={handleClick} className="formButton">Update</button>
    </div>
  )
}
