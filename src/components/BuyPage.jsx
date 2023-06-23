import React, { useState, useEffect } from "react";

import Axios from "axios";

import { faker } from '@faker-js/faker';

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

    const allProduct = response.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.productPrice(),
      id: faker.string.uuid()
    }));

    setProduct(allProduct);
    // console.log(setProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success">Done</h1>
      <Row>
        {product.map(product => (
          <span key={product.id}>{product.productName}</span>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
