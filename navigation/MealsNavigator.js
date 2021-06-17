import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetails from "../screens/MealDetails";
import MealsListScreen from "../screens/MealsListScreen";
import FavScreen from "../screens/FavScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator({
  //any_name_as_a_property_name:  pointer-at-the-component-you-want-to-load
  Categories: CategoriesScreen,
  MealsList: {
    screen: MealsListScreen,
  },
  MealDetails: MealDetails,

  //another way is also there
});

const FavNavigator = createStackNavigator({
  Favorites: FavScreen,
  MealDetails: MealDetails,
});

const FavTabNavigator = createBottomTabNavigator(
  {
    Meals: MealsNavigator,
    Fav: FavNavigator,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(FavTabNavigator);
