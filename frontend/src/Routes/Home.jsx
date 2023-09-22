import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import {
  AiOutlinePlus,
  AiFillCloseCircle,
  AiFillEdit,
  AiOutlineFolderView,
  AiOutlineArrowDown,
} from "react-icons/ai";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios
      .get("https://bookstore-ow0z.onrender.com/api/v1/book")
      .then((response) => {
        // console.log(response);
        setBooks(response.data.books);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  }, []);

  return (
    <Container fluid className="">
      <Container className="m-auto justify-content-center">
        <h1 className="text-center">Book Store</h1>
        <Link to="/book/create">
          <button className="btn btn-light m-auto text-secondary">
            <AiOutlinePlus />
          </button>
        </Link>
      </Container>
      {loader ? (
        <Loader />
      ) : (
        <table className="table table-bordered table-striped table-hover max-vh-100 ">
          <thead className="thead-dark">
            <tr className="text-center">
              <th>S. No.</th>
              <th>Name</th>
              <th>Technology</th>
              <th>Description</th>

              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book, index) => (
                <tr key={book._id}>
                  <td className="text-center ">{index + 1}</td>
                  <td className="text-center">{book.name}</td>
                  <td className="text-center">{book.technology}</td>
                  <td>{book.desc}</td>

                  <td>
                    <div className="d-flex justify-content-center gx-9 gy-5">
                      <Link
                        to={book.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineArrowDown className=" text-success m-2" />
                      </Link>
                      <Link to={`/book/delete/${book._id}`}>
                        <AiFillCloseCircle className=" text-danger" />
                      </Link>
                      <Link to={`/book/details/${book._id}`}>
                        <AiOutlineFolderView className=" text-info m-2" />
                      </Link>
                      <Link to={`/book/update/${book._id}`}>
                        <AiFillEdit className=" text-warning " />
                      </Link>
                     
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </Container>
  );
};

export default Home;
