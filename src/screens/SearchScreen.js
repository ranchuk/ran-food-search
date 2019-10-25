import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsyPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsyPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsyPrice("$$")} title="Bit Pricier" />
        <ResultsList results={filterResultsyPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default SearchScreen;
