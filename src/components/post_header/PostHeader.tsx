// header component
import { StyleSheet, View } from "react-native";
import Profile from "../profile/Profile";
const PostHeader = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <Profile data={data} />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FDFDFD",
  },
});

export default PostHeader;
