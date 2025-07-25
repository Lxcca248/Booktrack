
import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/books').then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>Meus Livros</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <strong>{book.title}</strong> por {book.author}
            {book.completed && ' ✅'}
          </li>
        ))}
      </ul>
    </div>
  );
}
