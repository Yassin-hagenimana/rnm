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
    const q="INSERT INTO  books(`title`,`cover`,`price`,`descriptions`)VALUES(?)"
    const values=[
      req.body.title,
      req.body.cover,
      req.body.descriptions,
      req.body.price
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("book has been created successfully")
    })
})
app.delete("/book/:id",(req,res)=>{
    const bookId=req.params.id;
    const q="DELETE FROM books WHERE id=?"
    db.query(q,[bookId],(err,data)=>{
        if(err) res.json(err)
        return res.json("Book deleted successfully");
    })
})

app.put("/book/update/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `descriptions`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.descriptions,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.listen(8080,()=>{
    console.log("connected successfully to backend")
})