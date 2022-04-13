// create card for each post
import { FlatList, StyleSheet, Text } from "react-native";
import PostContainer from "../components/post_container/PostContainer";
//import post container

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    nickname: "维吉尔",
    // avatar: require("/img/avatar.png"),
    post: "你的动力在哪里？",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    nickname: "维吉尔",
    // avatar: require("./img/footbal.png"),
    post: "你的动力在哪里？",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    nickname: "维吉尔",
    // avatar: require("./assets/img/rocket.png)"),
    post: "你的动力在哪里？",
  },
];
const Feed = () => {
  const renderItem = ({ item }: any) => <PostContainer data={item} />;
  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
  },
});

export default Feed;