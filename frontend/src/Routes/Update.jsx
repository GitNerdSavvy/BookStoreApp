import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Update = () => {
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://bookstore-ow0z.onrender.com/api/v1/book/${id}`);
        const data = response.data;
        if (data && data.book) {
          setName(data.book.name || "");
          setTech(data.book.technology || "");
          setDesc(data.book.desc || "");
          setUrl(data.book.url || "");
        }
        
        setLoader(false);
        // console.log(data);
      } catch (error) {
        setLoader(false);
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleEditBook = () => {
    const book = {
      name,
      technology: tech, 
      desc,
      url,
    };
    setLoader(true);
    axios
      .put(`https://bookstore-ow0z.onrender.com/api/v1/book/${id}`, book)
      .then(() => {
        setLoader(false);
        navigate("/");
      })
      .catch((error) => {
        setLoader(false);
        console.error(error);
      });
  };

  return (
    <Container fluid>
      <Container className="m-auto justify-content-center">
        <h1 className="text-center">Edit Book</h1>
        <Link to="/">
          <button className="btn btn-light m-auto text-secondary"><AiOutlineArrowLeft /></button>
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
          <button onClick={handleEditBook} className="btn btn-success m-auto ">
            Submit
          </button>
        </Container>
      )}
    </Container>
  );
};

export default Update;
