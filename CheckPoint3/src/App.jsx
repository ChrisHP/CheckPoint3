import { useEffect, useState } from "react";
import { BookTable } from "./Components/BookTable"
import { BookForm } from "./Components/BookForm";

function App() {
  const [books,setBooks]=useState([])
  const fetchBook= async ()=>{
    const res= await fetch("http://localhost:3000/books");
    const json=await res.json();
    setBooks(json);
  }
  const removeBook=async (id)=>{
    await fetch("http://localhost:3000/books/"+id,{
      method:"DELETE"
    });
    fetchBook()
  }
  const addBook=async ( book)=>{
    await fetch("http://localhost:3000/books",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(book)
    });
    fetchBook()
  }
  useEffect(()=>{
    fetchBook();
  },[])
  return (
    <div>
      <BookTable books={books} deleteBook={removeBook}/>
      <BookForm addBook={addBook}/>
    </div>

  )
}

export default App
