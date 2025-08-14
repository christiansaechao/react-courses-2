import { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { AboutPage, HomePage, ContactPage } from "./pages";
import Layout from "./components/layout";

function App() {
  const [name, setName] = useState("Colby");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout name={name} />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          {/* <Route path="/auth" element={<LoginLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignInPage />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
