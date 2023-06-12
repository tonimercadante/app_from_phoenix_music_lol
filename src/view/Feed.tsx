// create card for each post
import { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import PostContainer from "../components/post_container/PostContainer";

const Feed = () => {
  const [data, setData] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      nickname: "维吉尔",
      avatar: require("../../assets/img/rocket.png"),
      post: "你的动力在哪里？",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      nickname: "维吉尔",
      avatar: require("../../assets/img/avatar.png"),
      post: "你的动力在哪里？你的动力在哪里？你的动力在哪里？你的动力在哪里？你的动力在哪里？你的动力在哪里？你的动力在哪里？你的动力在哪里？你的动力在哪里？你的动力在哪里？",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      nickname: "维吉尔",
      avatar: require("../../assets/img/football.png"),
      post: "你的动力在哪里？",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      nickname: "维吉尔",
      avatar: require("../../assets/img/football.png"),
      post: "你的动力在哪里？",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d77",
      nickname: "维吉尔",
      avatar: require("../../assets/img/football.png"),
      post: "你的动力在哪里？",
    },
  ]);

  const renderItem = ({ item }: any) => <PostContainer data={item} />;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#dadada",
      }}
    >
      <StatusBar />
      <FlatList
        style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dadada",
    marginBottom: 4,
  },
});

export default Feed;
