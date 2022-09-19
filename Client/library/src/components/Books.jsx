import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import "../styles.css"
export default function Books() {
  const[books,setBooks]=useState([])
  useEffect(()=>{
      const fetchAllBooks=async()=>{
          try {
              const res=await axios.get("http://localhost:8080/books")
              setBooks(res.data)
              console.log(res.data)
          } catch (error) {
              console.log(error)
          }

      }
      fetchAllBooks();
  },[])
  return (
    <div>
    <h1>Yassin's books shop</h1>
    <div className="books">
    {books.map(book=>(
      <div className="book" key={book.id}>
      {book.cover && <img src={book.cover} alt="book"/>}
      <h2>{book.title}</h2>
      <p>{book.descriptions}</p>
      <span>{book.price}</span>
      <button className='delete'>Delete</button>
      <button className='update'>Update</button>
      </div>
  ))}
    </div>
    <button>
    <Link to="/add">
    Add new book
    </Link>
    
    </button>
    </div>
  )
}
