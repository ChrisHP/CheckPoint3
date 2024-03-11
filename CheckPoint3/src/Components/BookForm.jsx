import { useState } from "react";

export function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleYear = (event) => {
    setYear(event.target.value);
  };
  return (
    <form onSubmit={()=>addBook({title,author,year})}>
      <label>Title:</label>
      <input type="text" value={title} onChange={handleTitle} />
      <label>Author:</label>
      <input type="text" value={author} onChange={handleAuthor} />
      <label htmlFor="">Year:</label>
      <input id="year" type="number" value={year} onChange={handleYear} />
      <button type="submit">Add new book</button>
    </form>
  );
}
