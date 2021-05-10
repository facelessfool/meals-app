import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const CategoryGridTitle = ({ values, nav_props }) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        nav_props.navigation.navigate({
          routeName: "CategoryMeals",
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
        <Text>{values.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 150,
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
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans",
  },
});

export default CategoryGridTitle;
