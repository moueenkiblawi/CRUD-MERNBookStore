/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai"
// import {PiBookOpenTextLight} from 'react-icon/pi'
import {BiUserCircle} from 'react-icons/bi'
 // BookModel.jsx
 function BookModel({ book, onClose }) {
    console.log(book)
    if (!book) {
      return <div>No book data available.</div>;
    }
  
    const {  title, author, publishYear } = book;
  
    return (
      <div onClick={onClose} className="model">
        <div className="modal-detail" onClick={(e) => e.stopPropagation()}>
          <AiOutlineClose className="btn-modal" onClick={onClose} />
          <div className="book-card">
            <div className="book-details">
              {publishYear &&
               <div className="flex-row">
                <h2><strong>Publish Year:</strong></h2>
                <p>{publishYear}</p>
                </div> }
              <div >
                {title &&
                    <div className="flex-row" style={{gap:"10px"}}>
                    <h2> Title: </h2> <p>{title}</p>
                    </div>}
              </div>
              <div  className="flex-row">
                <BiUserCircle style={{fontSize:"20px"}}/>
                {author && <p><strong>Author:</strong> {author}</p>}
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsum in aut vitae suscipit accusantium, ipsa placeat deleniti perspiciatis atque!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BookModel;
  