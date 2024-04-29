import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "../components/spinner";
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show,setShow]=useState('')

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5555/books")
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ padding: "4px" }}>
            
            <div className="button">
                <h1>Books List</h1>

                <div style={{display:'flex',flexDirection:"row",gap:10}}> 

                <button className="btn btn-primary" onClick={()=>setShow('table')}>
                    Table
                </button>
                <button className="btn btn-primary" onClick={()=>setShow('card')}>
                    Card
                </button>
            
            </div>
                <Link to={"/books/create"}>
                    <MdOutlineAddBox className="btn btn-primary" />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
               show ==='table' ? <BooksTable books={books}/> : <BooksCard books={books}/>
            )}
        </div>
    );
}

export default Home;
