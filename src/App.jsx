import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import "./App.css";
import CompareCountries from "./pages/CompareCountries";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryDetails />} />
        <Route path="/compare/:c1/:c2" element={<CompareCountries />} />
      </Routes>
    </BrowserRouter>
  );
}
