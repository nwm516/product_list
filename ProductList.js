import React from 'react';
import "./ProductList.css";
import styled from 'styled-components';


const products = [
    {id: 1, name: "Laptop", description: "High performance laptop for professionals", price: 1200, image: "/laptop.jpg"},
    {id: 2, name: "Headphones", description: "Studio-grade headphones", price: 350, image: "/headphones.jpg"},
    {id: 3, name: "GameStation Z", description: "Latest release from the GameStation console line", price: 650, image: "/console.jpg"}
];

const ProductCard = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
`;

const ProductTitle = styled.h2`
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  margin: 0;
`;

function ProductList() {
    return (
        <ul>
            {products.map(product => (
                <ProductCard key={product.id}>
                    <ProductTitle>Product Highlight: {product.name}</ProductTitle>
                    <ProductDescription><b>Description: </b> {product.description}</ProductDescription>
                    <ProductImage src = {product.image} alt={product.name} />
                    <ProductDescription><b>Price:</b> ${product.price}</ProductDescription>
                </ProductCard>
            ))}
        </ul>
    );
};

export default ProductList;