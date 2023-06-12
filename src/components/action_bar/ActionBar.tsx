import { Image, StyleSheet, View } from "react-native";

const ActionBar = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Image
          source={require("../../../assets/img/iconaim.png")}
          style={styles.img}
        />
        <Image
          source={require("../../../assets/img/iconchat.png")}
          style={styles.img}
        />
        <Image
          source={require("../../../assets/img/iconidk.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    height: "12%",
    margin: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fdfdfd",
    width: "100%",
    height: "100%",
  },
  img: {},
});

export default ActionBar;
