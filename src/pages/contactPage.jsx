import { useState } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaHackerrank } from "react-icons/fa6"
import { SiExercism } from "react-icons/si"
import { HiLocationMarker } from "react-icons/hi"
import { MdEmail } from "react-icons/md"
import studioImg from "../assets/kaineRiverWeb.jpg"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import Container from "../components/layout/Container"
import {
  pageTransition,
  fadeUp,
  fadeIn,
  staggerContainer,
} from "../constants/motionVariants"
import { contactInfo } from "../constants/cvData"

const FORMSPREE_ID = "YOUR_FORM_ID"

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/KaineBinch" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/kainebinch",
  },
  {
    icon: FaHackerrank,
    label: "HackerRank",
    href: "https://hackerrank.com/profile/kainebinch",
  },
  {
    icon: SiExercism,
    label: "Exercism",
    href: "https://exercism.org/profiles/KaineBinch",
  },
]

const projectTypes = [
  "System Architecture",
  "Frontend Development",
  "Full Stack",
  "Other",
]

const selectClasses =
  "w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-text-1 text-sm transition-colors duration-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
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
        setFormData({ name: "", email: "", projectType: "", message: "" })
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
        <title>Kaine Binch | Contact</title>
        <meta
          name="description"
          content="Get in touch with Kaine Binch - available for freelance opportunities and collaborative projects."
        />
        <meta property="og:title" content="Kaine Binch | Contact" />
        <meta
          property="og:description"
          content="Get in touch with Kaine Binch - available for freelance opportunities and collaborative projects."
        />
        <meta property="og:image" content="/images/profile/kaine.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Container className="pt-32 pb-16">
        {/* ── Page header ── */}
        <motion.div
          className="mb-8 lg:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <p className="text-label uppercase tracking-widest text-text-2 mb-4">
            Get In Touch
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-12 items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-text-1">
                Let&apos;s build something
              </span>
              <span className="block text-text-2">extraordinary.</span>
            </h1>
            <p className="text-text-2 leading-relaxed">
              Currently available for select freelance opportunities and
              collaborative projects. If you have something in mind, I&apos;d
              love to hear about it.
            </p>
          </div>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left column */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}>
            {/* Direct Channel */}
            <motion.div variants={fadeUp}>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MdEmail className="text-primary" size={18} />
                  </div>
                  <h2 className="text-text-1 font-semibold">Direct Channel</h2>
                </div>
                <p className="text-text-2 text-sm mb-4 leading-relaxed">
                  For project enquiries or anything you&apos;d like to discuss
                  directly.
                </p>
                <a
                  href={contactInfo.email.link}
                  className="text-primary text-sm font-medium hover:underline break-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {contactInfo.email.address}
                </a>
              </Card>
            </motion.div>

            {/* Location + Socials */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <Card className="p-5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <HiLocationMarker className="text-primary" size={16} />
                </div>
                <p className="text-text-1 text-sm font-semibold mb-1">
                  Location
                </p>
                <p className="text-text-2 text-xs leading-snug">
                  {contactInfo.location.address}
                </p>
              </Card>

              <Card className="p-5">
                <p className="text-text-1 text-sm font-semibold mb-3">
                  Socials
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-2 hover:text-primary transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      <Icon size={16} className="flex-shrink-0" />
                      <span className="text-xs truncate">{label}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Studio Status */}
            <motion.div variants={fadeUp}>
              <Card className="overflow-hidden relative min-h-[200px]">
                <img
                  src={studioImg}
                  alt="Riverside landscape near Kaine's studio"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bg/60" />
              </Card>
            </motion.div>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            className="lg:col-span-3 h-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <Card className="p-6 h-full flex flex-col">
              <h2 className="text-text-1 font-semibold text-xl mb-4">
                Send a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 flex-1">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-name"
                    className="text-xs text-text-2 font-medium">
                    Your Name
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Kaine Binch"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-email"
                    className="text-xs text-text-2 font-medium">
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-type"
                    className="text-xs text-text-2 font-medium">
                    Project Type
                  </label>
                  <select
                    id="contact-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={selectClasses}
                    required>
                    <option
                      value=""
                      disabled
                      className="bg-surface text-text-2">
                      Select a project type
                    </option>
                    {projectTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-surface text-text-1">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <label
                    htmlFor="contact-message"
                    className="text-xs text-text-2 font-medium">
                    Message
                  </label>
                  <Input
                    id="contact-message"
                    multiline
                    name="message"
                    className="flex-1"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full justify-center">
                  Send Message →
                </Button>

                {formStatus === "success" && (
                  <p className="text-green-400 text-sm text-center">
                    Message sent - I&apos;ll be in touch soon!
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  )
}

export default ContactPage
