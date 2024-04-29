/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

function BooksTable({ books }) {
  return (
        <div>
        <table>
            <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publish Year</th>
                <th>Operations</th>
            </tr>
            </thead>
            <tbody>
            {books.map((book, index) => (
                <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear}</td>
                <td>
                    <div
                    style={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "space-between",
                    }}
                    >
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
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
  );
}

export default BooksTable;
