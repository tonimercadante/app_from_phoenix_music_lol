// nickname component
import { StyleSheet, Text } from "react-native";

const Nickname = ({ data }: any) => {
  return <Text style={styles.text}>{data.nickname}</Text>;
};

// styles
const styles = StyleSheet.create({
  container: {},
  text: {
    color: "#000",
    fontSize: 14,
  },
});

export default Nickname;
