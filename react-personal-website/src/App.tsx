import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import MoreAboutMe from "./screens/MoreAboutMe";
import Securochat from "./screens/Securochat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route element={<MoreAboutMe />} path="/more-about-me" />
          <Route element={<Securochat />} path="/securochat" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
