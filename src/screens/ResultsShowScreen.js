import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  if (!result) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        showsVerticalScrollIndicator={false}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
    borderRadius: 4
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default ResultsShowScreen;
