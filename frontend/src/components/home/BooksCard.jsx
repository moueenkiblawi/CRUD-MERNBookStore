/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModel from "./BookModel";
import { useState } from "react";
import { BiShow } from "react-icons/bi";

function BooksCard({ books }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
  
    const handleShowModal = (book) => {
      setSelectedBook(book);
      setShowModal(true);
    };
  
    return (
      <div className="books-container">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <div className="book-details">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Publish Year:</strong> {book.publishYear}</p>
            </div>
            <div className="book-actions">
              <BiShow style={{ color: "blue" }} onClick={() => handleShowModal(book)} />
              <Link to={`/books/detail/${book._id}`}>
                <BsInfoCircle style={{ color: "black" }} />
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit style={{ color: "blue" }} />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete style={{ color: "red" }} />
              </Link>
            </div>
          </div>
        ))}
        {showModal && <BookModel book={selectedBook} onClose={() => setShowModal(false)} />}
      </div>
    );
  }
  
  export default BooksCard;
  
 