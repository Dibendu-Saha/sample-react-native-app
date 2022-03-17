import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DataContext from "../context/DataContext";
import BlogForm from "../components/BlogForm";

const EditBlog = ({ navigation }) => {
  const { blogs, EditBlog } = useContext(DataContext);
  const blogDetails = blogs.find(item => item.id === navigation.getParam("id"));

  const [title, setTitle] = useState(blogDetails.title ?? "");
  const [content, setContent] = useState(blogDetails.content ?? "");

  const save = () => {
    if (title && content) {
      EditBlog(blogDetails.id, title, content);
      navigation.goBack();
    }
  }

  return <BlogForm
    title={title}
    content={content}
    handleTitleChange={setTitle}
    handleContentChange={setContent}
    save={save}
  />
}

export default EditBlog;