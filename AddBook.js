
import React, { useState } from 'react';
import api from '../services/api';

export default function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', pages: 0 });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    api.post('/books', { ...form, completed: false }).then(() => {
      alert('Livro adicionado!');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Título" onChange={handleChange} />
      <input name="author" placeholder="Autor" onChange={handleChange} />
      <input name="pages" type="number" placeholder="Páginas" onChange={handleChange} />
      <button type="submit">Adicionar</button>
    </form>
  );
}
