import React from "react";
import { Helmet } from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../css/App.css";
import "./../css/fonts.css";

import About from "./About";
import Intro from "./Intro";
import { LoveStacks, AlsoStacks, ToolsStacks } from "./Stacks";
import Social from "./Social";

const App = () => {
  return (
    <main className="slides-container">
      <Helmet>
        <title>Preetham | Software Engineer</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Intro />
      <About />
      <LoveStacks />
      <AlsoStacks />
      <ToolsStacks />
      <Social />
    </main>
  );
};

export default App;
