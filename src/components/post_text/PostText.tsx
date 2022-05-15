import { View, Text, StyleSheet } from "react-native";

interface PostTextProps {
  post: string;
}

const PostText = ({ post }: PostTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{post}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ECF8F2",
    backgroundColor: "#ECF5F1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#444",
    fontSize: 20,
  },
});

export default PostText;
