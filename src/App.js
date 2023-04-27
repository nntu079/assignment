
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import FirstLanding from "./pages/FirstLanding";
import SecondLangding from "./pages/SecondLanding";
import ErrorPage from "./pages/error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstLanding />}>
        </Route>
        <Route path="/first" element={<FirstLanding />}>
        </Route>

        <Route path="/second" element={<SecondLangding />}>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;