import { Image, StyleSheet, View } from "react-native";

const Avatar = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={data.avatar} />
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
