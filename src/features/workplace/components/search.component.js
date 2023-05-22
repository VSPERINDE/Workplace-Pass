import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import styled from "styled-components/native";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Search = () => {
  const keyword = "";
  const search = "";
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
