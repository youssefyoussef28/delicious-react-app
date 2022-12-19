import Home from "./Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
