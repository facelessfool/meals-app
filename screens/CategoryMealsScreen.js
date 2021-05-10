import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeaderTitle } from "react-navigation-stack";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../model/meals";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  // console.log("props inside category meals : ", props);
  const categoryIda = props.navigation.getParam("categoryId");
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryIda) >= 0
  );

  const renderList = (itemData) => {
    return (
      <View>
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          img={itemData.item.imageUrl}
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

  // const displayMeals = MEALS.filter(
  //   (meal) => meal.categoryIda.indexOf(cat.id) >= 0
  // );
  // console.log("display meals --", displayMeals);

  return (
    <View>
      {/* <Text>Category Meals Screen</Text> */}
      {/* <Text>{selectedCategory.title}</Text>
      /* <Button
        title="Meal Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetails" });
        }}
      /> */}
      <FlatList data={displayMeals} renderItem={renderList} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryIda = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryIda);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
});

export default CategoryMealsScreen;
