import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import SinglePosts from "./components/SinglePosts";

 function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home}  path="/" exact /> 
        <Route component={Posts} path="/posts" />
        <Route component={SinglePosts} path="/posts/:slug"  />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

