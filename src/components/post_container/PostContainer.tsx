// create card for each post
import { Dimensions, StyleSheet, View } from "react-native";
import ActionBar from "../action_bar/ActionBar";
import PostHeader from "../post_header/PostHeader";
import PostText from "../post_text/PostText";

const PostContainer = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <PostHeader data={data} />
      <PostText post={data.post} />
      <ActionBar />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.38,
    marginHorizontal: 4,
    marginVertical: 6,
    backgroundColor: "#ecf5f1",
  },
});

export default PostContainer;
