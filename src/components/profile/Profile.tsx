// react component
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../avatar/Avatar";
import Nickname from "../nickname/Nickname";

const Profile = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <Avatar data={data} />
      <Nickname data={data} />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Profile;
