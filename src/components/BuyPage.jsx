/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import Axios from "axios";

import { faker } from "@faker-js/faker";

import { Container, Col, Row } from "reactstrap";

import CartItem from "./CartItem";

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
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });

    const allProduct = response.photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.productPrice(),
      id: faker.string.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
