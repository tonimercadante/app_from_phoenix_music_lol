import { Image, StyleSheet, View } from "react-native";
import iconaim from "../../../assets/img/iconaim.png";
import iconchat from "../../../assets/img/iconchat.png";
import iconidk from "../../../assets/img/iconidk.png";

const ActionBar = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Image source={iconaim} style={styles.img} />
        <Image source={iconchat} style={styles.img} />
        <Image source={iconidk} style={styles.img} />
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
});

export default ActionBar;
