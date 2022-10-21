import React from "react"
import{useParams} from "react-router-dom";
import ProductForm from "./Product";

const ProductDetails=()=>{
    const products= [
        {
            id: 1,
            name:"iphone 14",
            Prise:10000,
            discription: "this is the letest iphone",
        },
        {
            id: 2,
            name:"iphone 14 Pro",
            Prise:10000,
            discription: "this is the letest iphone Pro",
        },
        {
            id: 3,
            name:"iphone 14 Pro max",
            Prise:10000,
            discription: "this is the letest iphone pro max",
        },
        {
            id: 4,
            name:"Mackbook",
            Prise:10000,
            discription: "this is the letest Mackbook",
        },
        {
            id: 5,
            name:"Mackbook pro",
            Prise:10000,
            discription: "this is the letest Mackbook Pro"
        }
    ]
    
        const {id} = useParams();
        const mainProducts = products.filter((product) =>{
            return product.id == id;
        });
        const mainProduct = mainProducts[0];

            return(
              
                <div>
                <h1>{mainProduct.name}</h1>
                <p>{mainProduct.discription}</p>
                <h3>{mainProduct.Prise}</h3>
                </div>
    );
};
export default ProductDetails;