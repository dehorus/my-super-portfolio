import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Post from "./components/Post";
import SinglePosts from "./components/SinglePosts";

 function App() {
 /* const { location } = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100vw, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-20vw, 0, 0)' },
  }); */
  return (
    <BrowserRouter>
    <NavBar />
      <div>
        <Switch>
          <Route component={Home}  path="/" exact /> 
          <Route component={Post} path="/posts" />
          <Route component={SinglePosts} path="/posts/:slug"  />
          <Route component={Portfolio} path="/portfolio"/>
          <Route component={Contact} path="/contact"/>
        </Switch>
      </div> 
      </BrowserRouter>
  )
}

export default App;

