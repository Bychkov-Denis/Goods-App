import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Loading } from '../components/Loading.jsx';
import styled from 'styled-components/native';

const FullProductContainer = styled.View`
  margin: 10px;
  text-align: center;
`;

const FullProductImage = styled.Image`
  width: 80%;
  height: 300px;
  margin: 0 auto;
  background-size: cover;
`;

const FullPostTitle = styled.Text`
  font-size: 20px;
  margin: 10px 0;
`;

const FullPostPrice = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const FullPostDescription = styled.Text`
  font-size: 18px;
  margin: 10px 0;
  border-bottom-width: 1px;
  padding-bottom: 5px;
`;

const FullPostCategory = styled.Text`
  font-size: 20px;
  text-decoration: underline;
`;

const FullPostRating = styled.Text`
  font-size: 20px;
  margin: 10px 0;
  padding: 5px;
`;

const FullPostCount = styled.Text`
  font-size: 20px;
  
`;

export const FullProductScreen = ({ route, navigation }) => {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id, title } = route.params; 

  const fetchProducts = () => {
    navigation.setOptions({
      title: title,
    });
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products/" + id)
      .then(res => res.json())
      .then(product => setProduct(product))
      .catch(() => Alert.alert("Error", "Failed to receive goods"))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  if(isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <FullProductContainer>
      <FullProductImage source={product.image} />
      <FullPostTitle>{product.title}</FullPostTitle>
      <FullPostPrice>Price: {product.price}$</FullPostPrice>
      <FullPostDescription>{product.description}</FullPostDescription>
      <FullPostCategory>category: {product.category}</FullPostCategory>
      <FullPostRating>Rate: {product.rating.rate}</FullPostRating>
      <FullPostCount>Count: {product.rating.count}</FullPostCount>
    </FullProductContainer>
  );
}