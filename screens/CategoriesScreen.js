import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const renderCategoryGrid = (itemData) => {
    // console.log(itemData);
    // console.log("props: ", props);
    return (
      <View>
        <CategoryGridTile values={itemData} nav_props={props} />
      </View>
    );
  };
  return (
    <View>
      {/* <Text>The Categories Screen!</Text> */}

      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryGrid}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 20,
    height: 150,
  },
});

export default CategoriesScreen;
