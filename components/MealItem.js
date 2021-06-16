import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  //   console.log("---");
  console.log(props);
  console.log(props.meali.imageUrl);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onSelect}>
        <ImageBackground
          source={{ uri: props.meali.imageUrl }}
          style={styles.bgImage}
        >
          <View>
            <Text style={styles.titleFont}>{props.meali.title}</Text>
          </View>

          <View style={styles.mealRow}>
            <Text style={styles.BodyFont}>{props.meali.duration}mins</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    backgroundColor: "#ccc",
    width: "100%",

    borderRadius: 10,
    overflow: "hidden",
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
    marginRight: 10,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  BodyFont: {
    fontFamily: "open-sans",
    fontSize: 15,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    marginRight: 10,
  },
  mealRow: {
    flexDirection: "row",
  },
});

export default MealItem;
