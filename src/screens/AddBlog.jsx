import React, { useContext, useState } from "react";
import BlogForm from "../components/BlogForm";
import DataContext from "../context/DataContext";

const AddBlog = ({ navigation }) => {
  let { AddBlog } = useContext(DataContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const save = () => {
    if (title.trim() && content.trim()) {
      AddBlog(title, content);
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

export default AddBlog;