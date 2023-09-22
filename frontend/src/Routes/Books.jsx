import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "../Loader/Loader";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Container } from 'react-bootstrap';

const Books = () => {
  const [book, setBook] = useState({});
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://bookstore-ow0z.onrender.com/api/v1/book/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  }, []);
  return (
    <Container fluid>
    <Container className="m-auto justify-content-center">
      <h1 className="text-center">Book Details</h1>
      <Link to="/">
        <button className="btn btn-light m-auto text-secondary"><AiOutlineArrowLeft /></button>
      </Link>
    </Container>
    {loader ? (
      <Loader />
    ) : (
        <div className='d-flex justify-content-center align-items-center flex-column border border-muted rounded p-4'>
            
            <div className='my-4'>
                <span className='h5 text-secondary me-4'>Title</span>
                <span>{book.name}</span>
            </div>
            <div className='my-4'>
                <span className='h5 text-secondary me-4'>Technology</span>
                <span>{book.technology}</span>
            </div>
            <div className='my-4'>
                <span className='h5 text-secondary me-4'>Description</span>
                <span>{book.desc}</span>
            </div>
            <div className='my-4'>
                <span className='h5 text-secondary me-4'>Create Time</span>
                <span>{new Date(book.created_at).toString()}</span>
            </div>
            <div className='my-4'>
                <span className='h5 text-secondary me-4'>Last Update Time</span>
                <span>{new Date(book.updated_at).toString()}</span>
            </div>
        </div>
    )}
</Container>

  )
}

export default Books