import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/spinner';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';


function DeleteBooks() {
  const {id}=useParams();
  const navigate = useNavigate();
  const [book, setBook]=useState({});
  const { enqueueSnackbar } = useSnackbar();

  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      setBook(response.data.book);
      setLoading(false)

    }).catch((err) =>{
      setLoading(false)

    console.log(err)
  })
    
    },[])

    const handleDelete = (e)=>{
      e.preventDefault();
      setLoading(true)
      axios.delete(`http://localhost:5555/books/${id}`)
      .then((response)=> {
        console.log("Deleted Book successfully",response);
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully",{variant:"success"})

        navigate('/')
      })
      .catch((error)=>{
        enqueueSnackbar("Error",{variant:"Error"})
        console.log(error)
      })
    }
  
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

      <div style={{ position: "fixed", top: "20px", left: "10%", fontSize: "20px" }}>
      <BackButton/>
      </div>
      <div>
      <h1>Delete Book</h1>
      {loading ? (<Spinner/>) : ""}

      <div className='delete-detail'>
        <h2>Title: {book.title}</h2>
        <h3>Are you Sure you want to delete this book</h3>
        <button onClick={handleDelete}>Yes, Delete it</button>
      </div>

      </div>
    </div>
  )
}

export default DeleteBooks