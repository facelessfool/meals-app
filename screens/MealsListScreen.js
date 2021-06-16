import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { headerTitle } from "react-navigation-stack";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

const MealsListScreen = (props) => {
  const renderMealItem = (itemData) => {
    console.log(itemData.item.title);
    return (
      <View>
        {/* <Text>{itemData.item.title}</Text> */}
        <MealItem
          meali={itemData.item}
          onSelect={() => {
            props.navigation.navigate("MealDetails", {
              steps: itemData.item.steps,
              title: itemData.item.title,
            });
          }}
        />
      </View>
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
      {/* <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      /> */}
    </View>
  );
};

MealsListScreen.navigationOptions = (navigationData) => {
  const categoryIda = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryIda);
  console.log(selectedCategory.cuisine);
  return {
    headerTitle: selectedCategory.cuisine,
  };
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsListScreen;
