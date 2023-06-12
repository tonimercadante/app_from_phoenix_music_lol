import { StyleSheet, Text, View } from "react-native";

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
    backgroundColor: "#ECF5F1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  text: {
    color: "#444",
    fontSize: 40,
  },
});

export default PostText;
