import React, { useState, useEffect } from "react";

import Axios from "axios";

// import { random, commerce } from "@faker-js/faker";

import { Container, Col, Row } from "reactstrap";

// import { config } from "dotenv";

// config();

const apiKey = import.meta.env.Pexels_KEY;

// console.log(import.meta.env)

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const response = await Axios.get(url, {
      header: {
        Authorization: apiKey,
      },
    });

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      // productName: random.word(),
      // productPrice: commerce.price(),
      // id: random.uuid(),
    }));

    setProduct(allProduct);
    console.log(setProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success">Done</h1>
    </Container>
  );
};

export default BuyPage;
