import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { FaReact } from "react-icons/fa"
import { SiTypescript, SiNodedotjs, SiTailwindcss } from "react-icons/si"
import kaineRiverWeb from "../assets/kaineRiverWeb.jpg"
import kaineRiverMobile from "../assets/kaineRiverMobile.jpg"
import Card from "../components/ui/Card"
import Tag from "../components/ui/Tag"
import Button from "../components/ui/Button"
import { TiltWrapper } from "../components/ui/TiltedCard"
import Container from "../components/layout/Container"
import {
  pageTransition,
  fadeUp,
  fadeIn,
  staggerContainer,
} from "../constants/motionVariants"
import { getYearsExperience } from "../utils/experience"

const techStack = [
  {
    bgIcon: FaReact,
    icon: FaReact,
    title: "React Ecosystem",
    desc: "Building performant, component-driven UIs with the tools the industry relies on.",
    tags: ["Next.js", "Vue.js", "React.js"],
  },
  {
    bgIcon: SiTypescript,
    icon: SiTypescript,
    title: "Core JavaScript",
    desc: "Strong foundations in modern JS; typed, async, and built to scale.",
    tags: ["TypeScript", "Node.js", "ES2024"],
  },
  {
    bgIcon: SiNodedotjs,
    icon: SiNodedotjs,
    title: "Backend Engineering",
    desc: "Server-side logic, REST APIs, and relational databases that hold up under load.",
    tags: ["PostgreSQL", "REST APIs", "PHP", "GoLang"],
  },
  {
    bgIcon: SiTailwindcss,
    icon: SiTailwindcss,
    title: "Modern Styling",
    desc: "Design systems, utility-first CSS, and motion that feels intentional.",
    tags: ["Tailwind CSS", "Framer Motion", "DaisyUI"],
  },
]

const stats = [
  { value: `${getYearsExperience()}+`, label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "100+", label: "Features Built" },
]

const AboutPage = () => (
  <motion.div {...pageTransition}>
    <Helmet>
      <title>Kaine Binch | About</title>
      <meta
        name="description"
        content="Self-taught software developer based in Nottinghamshire. Specialising in React, TypeScript, and modern full-stack development."
      />
      <meta property="og:title" content="Kaine Binch | About" />
      <meta
        property="og:description"
        content="Self-taught software developer based in Nottinghamshire. Specialising in React, TypeScript, and modern full-stack development."
      />
      <meta property="og:image" content="/images/profile/kaine.webp" />
      <meta property="og:type" content="website" />
    </Helmet>

    {/* ── Hero ── */}
    <section className="pt-32 lg:pb-32 pb-16">
      <Container>
        <div className="flex flex-col gap-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <p className="text-label uppercase tracking-widest text-text-2 -mb-10">
              Personal & Professional
            </p>
          </motion.div>

          {/* Heading + image — always side by side, image centred to heading */}
          <motion.div
            className="grid grid-cols-[60%_40%] items-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <div>
              <h1 className="text-hero">
                <span className="block text-text-1">Building</span>
                <span className="block text-text-2">Reliable Software.</span>
              </h1>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl ml-6 md:ml-0">
                <img
                  src={kaineRiverWeb}
                  alt="Kaine Binch, software developer"
                  className="hidden md:block w-full h-full object-cover object-top"
                />
                <img
                  src={kaineRiverMobile}
                  alt="Kaine Binch, software developer"
                  className="block md:hidden w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio content — full width below the heading row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <p className="text-text-2 leading-relaxed mb-5">
              I&apos;m a self-taught software developer based in
              Nottinghamshire. My path into tech started with curiosity and
              determination, from pixel art generators and sorting visualisers
              to full React applications and REST-backed dashboards. Today I
              specialise in building fast, accessible, user-focused products
              with TypeScript and modern full-stack tooling.
            </p>
            <p className="text-text-2 leading-relaxed mb-8">
              Before software, I spent years managing teams in the social care
              sector, an experience that shaped how I think about empathy,
              communication, and systems that serve real people. I bring that
              same mindset to every line of code: build for the human, not just
              the browser.
            </p>
            <p className="text-text-2 italic mb-10"> Kaine Binch</p>
            <Button href="/#/contact">Let&apos;s Talk</Button>
          </motion.div>
        </div>
      </Container>
    </section>

    {/* ── Tech Stack ── */}
    <section className="lg:py-24 py-16 bg-surface/30 border-y border-white/5">
      <Container>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <p className="text-label uppercase tracking-widest text-text-2 mb-2">
            Technical Stack
          </p>
          <h2 className="text-section text-text-1 mb-2">
            The Modern Engine Room
          </h2>
          <p className="text-text-2 mb-12">
            Curated tools for high-performance digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}>
          {techStack.map(
            ({ bgIcon: BgIcon, icon: Icon, title, desc, tags }) => (
              <motion.div key={title} variants={fadeUp}>
                <TiltWrapper rotateAmplitude={8} scaleOnHover={1.03}>
                  <Card className="p-6 relative overflow-hidden h-full hover:border-white/20 transition-colors duration-300">
                    <BgIcon
                      className="absolute -right-4 -bottom-4 text-white/5"
                      size={100}
                    />
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <h3 className="text-text-1 font-semibold mb-2 relative">
                      {title}
                    </h3>
                    <p className="text-text-2 text-sm leading-relaxed mb-4 relative">
                      {desc}
                    </p>
                    <div className="flex flex-wrap gap-2 relative">
                      {tags.map((tag) => (
                        <Tag key={tag} variant="primary">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </Card>
                </TiltWrapper>
              </motion.div>
            ),
          )}
        </motion.div>
      </Container>
    </section>

    {/* ── Philosophy ── */}
    <section className="lg:pt-24 lg:pb-24 pt-16 pb-16">
      <Container>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <Card className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-section text-text-1 mb-6">
                  Designing the Future,
                  <br />
                  One Commit at a Time.
                </h2>
                <p className="text-text-2 leading-relaxed mb-10">
                  Every project is an opportunity to do something better than
                  the last. I believe in writing code that&apos;s readable,
                  systems that are maintainable, and interfaces that get out of
                  the way of the user. Shipping matters... But shipping well
                  matters more.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {stats.map(({ value, label }) => (
                    <div key={label}>
                      <p className="text-primary text-3xl font-bold mb-1">
                        {value}
                      </p>
                      <p className="text-text-2 text-xs">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg rounded-xl border border-white/10 p-6 font-mono text-sm">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <pre className="text-text-2 leading-relaxed whitespace-pre-wrap">
                  <span className="text-text-2/50">
                    {"// The core philosophy"}
                  </span>
                  {"\n"}
                  <span className="text-primary">{"function "}</span>
                  <span className="text-text-1">{"createExcellence("}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-text-2">{"passion,"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-text-2">{"precision"}</span>
                  {"\n"}
                  <span className="text-text-1">{")"}</span>
                  {" {"}
                  {"\n"}
                  {"  "}
                  <span className="text-primary">{"return "}</span>
                  <span className="text-text-1">{"passion"}</span>
                  <span className="text-text-2">{".merge("}</span>
                  <span className="text-text-1">{"precision"}</span>
                  <span className="text-text-2">{")"}</span>
                  <span className="text-text-1">{";"}</span>
                  {"\n"}
                  {"}"}
                </pre>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  </motion.div>
)

export default AboutPage
