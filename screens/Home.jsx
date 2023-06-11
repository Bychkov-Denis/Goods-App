import React, { useState, useEffect } from 'react';
import { View, Alert, FlatList, RefreshControl, TouchableOpacity } from 'react-native';

import { Product } from '../components/Product.jsx';
import { Loading } from '../components/Loading.jsx';

export const HomeScreen = ({ navigation }) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = () => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(products => setProducts(products))
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
    <View style={{marginTop: 25}}>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />}
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("FullProduct", { id: item.id, title: item.title })} >
            <Product 
              title={item.title} 
              image={item.image} 
              category={item.category}
            />
          </TouchableOpacity> 
        )}
        keyExtractor={item => item.id} 
      />
    </View>
  )
}