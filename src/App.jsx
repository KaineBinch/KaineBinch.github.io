import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AboutPage, HomePage, NotFound } from "./pages";
import Navbar from "./components/navbar";
import { appRoutes } from "./constants/appRoutes";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route exact path={appRoutes.home} element={<HomePage />} />
        <Route exact path={appRoutes.about} element={<AboutPage />} />
        <Route path={appRoutes.notFound} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
