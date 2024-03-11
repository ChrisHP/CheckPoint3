export function BookTable({ books, deleteBook }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Año</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td><button onClick={()=>deleteBook(book.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
