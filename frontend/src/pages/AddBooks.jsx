// src/components/AddBookForm.js
import  { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishYear: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/books', formData)
      .then(response => {
        console.log('Book added successfully:', response.data);
        // Optionally, reset the form after successful submission
        setFormData({
          title: '',
          author: '',
          publishYear: ''
        });
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
        </div>
        <div>
          <label>Publish Year:</label>
          <input type="text" name="publishYear" value={formData.publishYear} onChange={handleChange} />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
