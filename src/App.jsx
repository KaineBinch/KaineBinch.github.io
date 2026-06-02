import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import "./App.css"
import {
  HomePage,
  AboutPage,
  ProjectsPage,
  ContactPage,
  CvPage,
  NotFound,
} from "./pages"
import Navbar from "./components/navbar"
import Footer from "./components/layout/Footer"
import { appRoutes } from "./constants/appRoutes"
import ScrollToTop from "./components/scrollToTop"

function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={appRoutes.home}     element={<HomePage />} />
          <Route path={appRoutes.about}    element={<AboutPage />} />
          <Route path={appRoutes.projects} element={<ProjectsPage />} />
          <Route path={appRoutes.contact}  element={<ContactPage />} />
          <Route path={appRoutes.cv}       element={<CvPage />} />
          <Route path={appRoutes.notFound} element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
