import { Route, Routes, useLocation } from "react-router-dom";
import { About, Contact, Home, Portfolio } from "../pages";
import { AnimatePresence } from "framer-motion";

export const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
