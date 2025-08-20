import { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { AboutPage, HomePage, ContactPage } from "./pages";
import Layout from "./components/layout";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="/guest" element={<GuestLayout />}>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
