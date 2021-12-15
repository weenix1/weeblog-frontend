import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from "./components/register/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Route path="/register" exact component={SignUp} />
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/blog/:id" exact component={Blog} />
      <Route path="/new" exact component={NewBlogPost} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
