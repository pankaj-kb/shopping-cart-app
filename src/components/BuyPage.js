import React, {useState, useEffect} from "react";

import Axios from "axios";

import {random, commerce,} from "faker"

import { Container, Col, Row } from "reactstrap";

import { config } from 'dotenv';

config();

const apiKey = process.env.Pexels_KEY;

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([])
    const fetchPhotos = async () => {
        const response = await Axios.get(url, {header: {
            Authorization: apiKey
        }})
    }
}

export default BuyPage