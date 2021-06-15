import React from "react";
import { FlatList, View, Text, StyleSheet, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";

const CategoryGridTile = ({ values, nav_props }) => {
  return (
    <TouchableOpacity
      style={styles.grid}
      onPress={() => {
        nav_props.navigation.navigate({
          routeName: "MealsList",
          params: {
            categoryId: values.item.id,
          },
        });
      }}
    >
      <View
        style={{
          ...styles.container,
          ...{ backgroundColor: values.item.color },
        }}
      >
        <Text style={styles.title}>{values.item.cuisine}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 20,
    height: 150,
    width: 140,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 9,
    shadowRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans",
  },
});

export default CategoryGridTile;
