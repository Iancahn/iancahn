import React from 'react';
//Import components
import './styles/App.css';
import Navbar from "./components/Navbar"
import Hello from "./components/Hello"
import About from "./components/About"
import Blocks from "./components/Blocks"
import IconList from "./components/IconList";
import IconList2 from "./components/IconList2";
import ProjectIntro from "./components/ProjectIntro";
import ProjectList from "./components/ProjectList";
import ProjectList2 from "./components/ProjectList2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Hello className="hello" />
      <About />
      <Blocks />
      <IconList />
      <IconList2 />
      <ProjectIntro />
      <ProjectList />
      <ProjectList2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;