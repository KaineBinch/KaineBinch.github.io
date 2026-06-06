import { useState } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import kaineHead from "../assets/kaineHeadNewNew.png"
import Button from "../components/ui/Button"
import Container from "../components/layout/Container"
import { pageTransition, fadeUp, fadeIn } from "../constants/motionVariants"
import AboutBlurb from "../components/homepage/AboutBlurb"
import ContactForm from "../components/homepage/ContactForm"
import ProjectsCarousel from "../components/homepage/ProjectsCarousel"
import ProjectsGrid from "../components/homepage/ProjectsGrid"

const FORMSPREE_ID = "YOUR_FORM_ID"

const HomePage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formStatus, setFormStatus] = useState("")

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setFormStatus("error")
      }
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Kaine Binch | Software Engineer</title>
        <meta
          name="description"
          content="Nottingham based software engineer building fast, user-focused applications with React, TypeScript, and modern full-stack tooling."
        />
        <meta property="og:title" content="Kaine Binch | Software Engineer" />
        <meta
          property="og:description"
          content="Nottingham based software engineer building fast, user-focused applications with React, TypeScript, and modern full-stack tooling."
        />
        <meta property="og:image" content="/images/profile/kaine.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="pt-24 lg:pt-32 pb-6 lg:pb-12">
        <Container className="w-full">
          <div className="flex flex-col gap-10 md:gap-3">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}>
              <p className="text-label uppercase tracking-widest text-text-2 -mb-10">
                Software Engineer &amp; Developer
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-[3fr_2fr] items-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}>
              <div className="mr-6">
                <h1 className="text-hero">
                  <span className="block text-text-1">Hi, I&apos;m</span>
                  <span className="block text-primary">Kaine Binch.</span>
                </h1>
              </div>
              <div className="flex w-full">
                <div className="flex relative w-full justify-center">
                  <div
                    className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-[350px]"
                    style={{ maxHeight: "clamp(8rem, 28vh, 16rem)" }}>
                    <img
                      src={kaineHead}
                      alt="Kaine Binch, software engineer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}>
              <p className="text-text-2 text-lg mb-8 max-w-md leading-relaxed">
                Nottingham based developer building fast, user-focused
                applications with React, TypeScript, and modern full-stack
                tooling.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/#/projects">View My Work</Button>
                <Button variant="secondary" href="/#/about">
                  About Me
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Mobile: About → Projects carousel → Contact ── */}
      <div className="lg:hidden">
        <Container className="py-8">
          <AboutBlurb />
        </Container>

        <ProjectsCarousel />

        <Container className="py-8 pb-16">
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formStatus={formStatus}
          />
        </Container>
      </div>

      {/* ── Desktop: Projects left | About + Contact right ── */}
      <Container className="hidden lg:block py-8 pb-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 h-full">
            <ProjectsGrid />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-12">
            <AboutBlurb />
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formStatus={formStatus}
            />
          </div>
        </div>
      </Container>
    </motion.div>
  )
}

export default HomePage
