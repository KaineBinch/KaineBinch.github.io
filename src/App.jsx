import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { HomePage, NotFound, ProjectsPage, CvPage, WorkPage } from "./pages";
import Navbar from "./components/navbar";
import { appRoutes } from "./constants/appRoutes";
import ScrollToTop from "./components/scrollToTop";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route exact path={appRoutes.home} element={<HomePage />} />

        <Route exact path={appRoutes.work} element={<WorkPage />} />
        <Route exact path={appRoutes.cv} element={<CvPage />} />
        <Route exact path={appRoutes.projects} element={<ProjectsPage />} />
        <Route path={appRoutes.notFound} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
