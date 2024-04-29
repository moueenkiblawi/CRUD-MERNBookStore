import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/spinner';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';


function ShowBooks() {

    const [book,setBook]= useState([]);
    const [loading, setLoading] = useState(false);
    const {id}= useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`) // Fix the URL by adding a colon after "https"
            .then((response) => {
                setBook(response.data.book);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <BackButton/>
        <h1>Show Book</h1>
        {loading ?(<Spinner/>) : (
            <div style={{width:"20rem", height:"20rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} className='book-card'>
                <div className='book-details'>
                    <span>ID: </span>
                    <span>{book._id}</span>
                </div>

                <div className='book-details'>
                    <span>Title: </span>
                    <span>{book.title}</span>
                </div>
                <div className='book-details'>
                    <span>Author: </span>
                    <span>{book.author}</span>
                </div>
                <div className='book-details'>
                    <span>Publish Year: </span>
                    <span>{book.publishYear}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default ShowBooks