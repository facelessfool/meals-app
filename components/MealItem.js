import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const MealItem = (props) => {
  //   console.log("props in mealitem : ", props);
  return (
    <View style={styles.mealContainer}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: props.img }} style={styles.bgImage}>
              <Text style={styles.titleFont} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.mealRow}>
            <Text> {props.duration}m</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    height: 220,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%",
  },
  MealDetails: {
    height: "10%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  titleFont: {
    fontFamily: "open-sans",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});

export default MealItem;
