// create card for each post
import { StyleSheet, Text, View } from "react-native";
import PostHeader from "../post_header/PostHeader";
import PostText from "../post_text/PostText";

const PostContainer = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <PostHeader data={data} />
      <PostText post={data.post} />

      {/* ACTION BAR -> ICON BAR */}
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    height: 225,
    marginHorizontal: 4,
    marginVertical: 6,
    flex: 1,
  },
});

export default PostContainer;
