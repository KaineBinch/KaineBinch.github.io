import { motion } from "framer-motion"
import { fadeUp } from "../../constants/motionVariants"
import Button from "../ui/Button"
import Input from "../ui/Input"

const ContactForm = ({ formData, handleChange, handleSubmit, formStatus }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}>
    <p className="text-label uppercase tracking-widest text-text-2 mb-2">
      Get In Touch
    </p>
    <h2 className="text-section text-text-1 mb-6">Contact Me</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="home-name" className="text-xs text-text-2 font-medium">
          Name
        </label>
        <Input
          id="home-name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="home-email" className="text-xs text-text-2 font-medium">
          Email
        </label>
        <Input
          id="home-email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="home-message"
          className="text-xs text-text-2 font-medium">
          Message
        </label>
        <Input
          id="home-message"
          multiline
          name="message"
          placeholder="What are you working on?"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full justify-center mt-2 lg:mt-1">
        Send Message
      </Button>
      {formStatus === "success" && (
        <p className="text-green-400 text-sm text-center">
          Message sent — I&apos;ll be in touch!
        </p>
      )}
      {formStatus === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  </motion.div>
)

export default ContactForm
