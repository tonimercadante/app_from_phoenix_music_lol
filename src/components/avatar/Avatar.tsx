import { Image, StyleSheet, View } from "react-native";

const Avatar = ({ avatar }: any) => {
  // log avatar
  console.log(avatar);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={avatar} />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    marginRight: 14,
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default Avatar;
