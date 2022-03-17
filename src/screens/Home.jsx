import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import DataContext from "../context/DataContext";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const { blogs, DeleteBlog } = useContext(DataContext);

  const goToDetails = (blogId) => {
    navigation.navigate("BlogDetails", { id: blogId });
  }

  return (
    <View style={styles.container}>
      <Text>My Blogs</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={blogs}
        renderItem={({ item }) => (
          <Pressable onPress={() => goToDetails(item.id)}>
            <View style={styles.row}>
              <Text>{`${item.id}. ${item.title}`}</Text>
              <Pressable onPress={() => DeleteBlog(item.id)}>
                <FontAwesome name="trash-o" size={20} />
              </Pressable>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}

Home.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <Pressable
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate("AddBlog")}
      >
        <AntDesign name="plus" size={24} />
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "grey"
  }
});

export default Home;