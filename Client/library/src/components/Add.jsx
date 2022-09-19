import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Add() {
  const navigate=useNavigate()
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
      await axios.post("http://localhost:8080/books",book)
      navigate("/");
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className='form'>
    <h1>Add New Book</h1>
    <input type="text" placeholder="Title" name='title' onChange={handleChange}/>
    <input type="text" placeholder="Description" name='desc' onChange={handleChange}/>
    <input type="text" placeholder="Price" name='price' onChange={handleChange}/>
    <input type="text" placeholder="Cover" name='cover' onChange={handleChange}/>

    <button onClick={handleClick} className="formButton">Add</button>
    </div>
  )
}
