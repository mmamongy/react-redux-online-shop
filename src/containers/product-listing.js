import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import ProductComponent from './productComponent';
import axios from 'axios' ;


const ProductListing = () => {
    const products = useSelector((state) => state) ;

    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log(err); 
         
        });
        console.log(response);
    };

    useEffect(() => {
        fetchProducts() ;
    },[]) ;
    return (
        <div className="ui grid container">
        <ProductComponent/>
        </div>

    );

};

export default ProductListing ;