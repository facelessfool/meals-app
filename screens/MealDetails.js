import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  headerTitle,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetails = (props) => {
  return (
    <View style={styles.para}>
      <Text style={styles.titleFont}>{props.navigation.getParam("title")}</Text>

      <Text style={styles.textStyle}>{props.navigation.getParam("steps")}</Text>

      <Button
        title="go to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetails.navigationOptions = (nav_data) => {
  // const title = nav_data.navigation.getParam("title");

  return {
    // headerTitle: title,
    //HeaderButtons expects a header button prop
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Fav"
          iconName="ios-heart-outline"
          onPress={() => {
            iconName = "ios-heart";
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  para: {
    flex: 1,
    margin: 10,
    // justifyContent: "center",
    alignItems: "center",
    fontFamily: "open-sans",
  },

  textStyle: {
    textAlign: "left",
    fontFamily: "open-sans",
  },
  titleFont: {
    margin: 10,
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
});

export default MealDetails;
