import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetails from "../screens/MealDetails";
import MealsListScreen from "../screens/MealsListScreen";

const MealsNavigator = createStackNavigator({
  //any_name_as_a_property_name:  pointer-at-the-component-you-want-to-load
  Categories: CategoriesScreen,
  MealsList: {
    screen: MealsListScreen,
  },
  MealDetails: MealDetails,

  //another way is also there
});

export default createAppContainer(MealsNavigator);
