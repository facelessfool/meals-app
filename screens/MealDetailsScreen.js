import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MealDetailsScreen = (props) => {
  return (
    <View style={styles.para}>
      <Text>{props.navigation.getParam("steps")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  para: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "open-sans",
  },
});

export default MealDetailsScreen;
