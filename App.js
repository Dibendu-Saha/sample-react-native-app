import { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddBlog from "./src/screens/AddBlog";
import Home from "./src/screens/Home";
import DataContext from "./src/context/DataContext";
import BlogDetails from "./src/screens/BlogDetails";
import EditBlog from "./src/screens/EditBlog";

const navigator = createStackNavigator({
  Home: Home,
  AddBlog: AddBlog,
  BlogDetails: BlogDetails,
  EditBlog: EditBlog
},
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blog"
    }
  });

const App = createAppContainer(navigator);




export default () => {
  const testData = [
    { id: 0, title: "Test title 1", content: "This is purely for test..!" },
    { id: 1, title: "Test title 2", content: "This is purely for test..!" },
    { id: 2, title: "Test title 3", content: "This is purely for test..!" },
    { id: 3, title: "Test title 4", content: "This is purely for test..!" }
  ];

  const [id, setId] = useState(1);
  const [blogs, setBlog] = useState(testData);

  const AddBlog = (title, content) => {
    setBlog(
      [...blogs, { id, title, content }]
    );
    setId(id + 1);
  };

  const EditBlog = (id, title, content) => {
    var updatedBlog = blogs.find(item => item.id === id);
    updatedBlog.title = title;
    updatedBlog.content = content;
    setBlog(
      [...blogs, updatedBlog]
    );
  }

  const DeleteBlog = (id) => {
    setBlog(
      blogs.filter(el => el.id !== id)
    );
  }

  return (
    <DataContext.Provider value={{ blogs, AddBlog, EditBlog, DeleteBlog }}>
      <App />
    </DataContext.Provider>
  )
}
