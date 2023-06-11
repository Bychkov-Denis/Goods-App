import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';


const SpinnerContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: 15px;
`

export const Loading = () => {
  return (
    <SpinnerContainer>
      <ActivityIndicator size="large" color="black" />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  )
}