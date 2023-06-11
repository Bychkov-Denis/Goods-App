import React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const ProductView = styled.View`
  padding: 15px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  display: flex;
  flex-direction: row;
`;

const ProductImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin-right: 10px;
  object-fit: cover;
  background-size: cover;
  background-position: center;
`;

const ProductDetails = styled.View`
  justify-content: center;
  flex: 1;     
`;

const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const ProductCategory = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
`;

export const Product = ({ title, image, category }) => {
  return (
    <ProductView>
      <ProductImage source={{ uri: image }}/>
      <ProductDetails>
        <ProductTitle>{title}</ProductTitle>
        <ProductCategory>{category}</ProductCategory>
      </ProductDetails>
    </ProductView>
  )
}