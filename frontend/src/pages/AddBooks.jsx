import { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/spinner';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const AddBook = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishYear: ''
  });

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted
    enqueueSnackbar("Book Created Successfully",{variant:"success"})
    axios.post('http://localhost:5555/books', formData)
    .then(response => {
      console.log('Book added successfully:', response.data);

      setFormData({  
        title: '',
        author: '',
        publishYear: ''
      });
      // Stop loading and navigate to desired page after successful submission
      setLoading(false);
      navigate('/');
    })
    .catch(error => {
      console.error('Error adding book:', error);
      enqueueSnackbar("Error",{variant:"Error"})
        setLoading(false);
    });
  }  
  return (
    <div>
      <div style={{ position: "fixed", top: "20px", left: "10%", fontSize: "20px" }}>
        <BackButton /> 
      </div>
      <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-detail'>
                <label htmlFor='title'>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
              </div>
              <div className='form-detail'>
                <label htmlFor='author'>Author:</label>
                <input type="text" name="author" value={formData.author} onChange={handleChange} />
              </div>
              <div className='form-detail'>
                <label htmlFor='publishYear'>Publish Year:</label>
                <input type="text" name="publishYear" value={formData.publishYear} onChange={handleChange} />
              </div>
              <button type="submit">Add Book</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBook;
