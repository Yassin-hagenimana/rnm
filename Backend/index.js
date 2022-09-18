import express from "express"
import mysql from "mysql"
import cors from "cors"


const app=express()


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Yassin@20233",
    database:"library"
})
app.use(cors())
app.use(express.json());
app.get("/",(req,res)=>{
    res.json("This is backend server")
})

app.get("/books",(req,res)=>{
    const q="select * from books";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books",(req,res)=>{
    const q="INSERT INTO  books(`title`,`cover`,`descriptions`)VALUES(?)"
    const values=[
      req.body.title,
      req.body.cover,
      req.body.descriptions
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("book has been created successfully")
    })
})

app.listen(8080,()=>{
    console.log("connected successfully to backend")
})