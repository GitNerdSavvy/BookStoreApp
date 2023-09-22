import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from 'react-icons/ai';
const Create = () => {
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const book = {
      name,
      technology: tech, 
      desc,
      url,
    };
    setLoader(true);
    axios
      .post("https://bookstore-ow0z.onrender.com/api/v1/book/new", book)
      .then(() => {
        setLoader(false);
        navigate("/");
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  return (
    <Container fluid>
      <Container className="m-auto justify-content-center">
        <h1 className="text-center">Create Book</h1>
        <Link to="/">
         <button className="btn btn-light m-auto text-secondary"><AiOutlineArrowLeft/></button>
        </Link>
        
      </Container>
      {loader ? (
        <Loader />
      ) : (
        <Container className="m-auto justify-content-center d-flex flex-column">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="tech">Technology:</label>
          <input
            type="text"
            id="tech"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          />
          <label htmlFor="desc">Description:</label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <label htmlFor="url">Download Link:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleSaveBook} className="btn btn-success m-auto ">
            Submit
          </button>
        </Container>
      )}
    </Container>
  );
};

export default Create;
