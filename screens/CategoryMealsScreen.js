import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View>
      <Text>Category Meals Screen</Text>
      <Button
        title="Meal Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetails" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
