// nickname component
import { StyleSheet, Text } from "react-native";

const Nickname = ({ nickname }: any) => {
  return <Text style={styles.text}>{nickname}</Text>;
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
