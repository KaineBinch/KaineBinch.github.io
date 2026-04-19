import { motion } from "framer-motion"
import { fadeUp } from "../../constants/motionVariants"
import Button from "../ui/Button"

const AboutBlurb = () => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
    <p className="text-label uppercase tracking-widest text-text-2 mb-2">The Person</p>
    <h2 className="text-section text-text-1 mb-4">About Me</h2>
    <p className="text-text-2 leading-relaxed mb-6">
      I&apos;m a self-taught developer from Nottinghamshire. I specialise in React
      and TypeScript, with a background in team management that shapes how I think
      about building software — collaboratively, clearly, and with the end user
      always in mind.
    </p>
    <Button variant="ghost" href="/#/about">Read my story →</Button>
  </motion.div>
)

export default AboutBlurb
