import React,{useState} from 'react'
import Loader from "../Loader/Loader";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Delete = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const DelBook=()=>{
      setLoader(true)
      axios.delete(`https://bookstore-ow0z.onrender.com/api/v1/book/${id}`)
      .then(()=>{
        setLoader(false);
        navigate('/')
      }).catch((error)=>{
        console.log(error);
      })
  }
  return (
    <Container fluid>
    <Container className="m-auto justify-content-center">
      <h1 className="text-center">Delete Book</h1>

      <Link to="/">
        <button className="btn btn-light m-auto text-secondary"><AiOutlineArrowLeft /></button>
      </Link>

    </Container>
    {loader?<Loader/>:""}
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <h3 >Do you want to delete this book?</h3>



        <button
          className='m-auto btn btn-danger text-warning'
          onClick={DelBook}
        >
          Yes, Delete it
        </button>
      </div>
    </Container>
  )
}

export default Delete