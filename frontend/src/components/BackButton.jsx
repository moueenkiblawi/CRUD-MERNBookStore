import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";


function BackButton() {
  return (
    <div>
        <Link to={"/"}>
            <BsArrowLeft className="back"/>
        </Link>
    </div>
  )
}

export default BackButton