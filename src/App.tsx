import { BrowserRouter as Router } from "react-router-dom";
import { AnimRoutes, Header } from "./components";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};
