import React, { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import DataContext from "../context/DataContext";
import { AntDesign } from "@expo/vector-icons";

const BlogDetails = ({ navigation }) => {
  const { blogs } = useContext(DataContext);
  const blogDetails = blogs.find(el => el.id === navigation.getParam("id"));

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700" }}>{blogDetails.title}</Text>
      <Text>{blogDetails.content}</Text>
    </View>
  )
}

BlogDetails.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <Pressable
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate("EditBlog", { id: navigation.getParam("id") })}
      >
        <AntDesign name="edit" size={20} />
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  }
});

export default BlogDetails;