import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";

const MealDetails = (props) => {
  return (
    <View>
      <Text>The Meal Details Screen!</Text>
      <Button
        title="go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />

      <Button
        title="go to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetails;
