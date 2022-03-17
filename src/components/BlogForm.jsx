import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogForm = ({
  title, content, handleTitleChange, handleContentChange, save
}) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Enter title:</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={val => handleTitleChange(val)}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Enter content:</Text>
        <TextInput
          value={content}
          style={styles.input}
          onChangeText={val => handleContentChange(val)}
        />
      </View>
      <Button title="Save" onPress={save} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  label: {
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    fontSize: 16,
    width: 300,
    margin: 10
  }
});

export default BlogForm;