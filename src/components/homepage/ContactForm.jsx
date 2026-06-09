import { useState } from "react"
import { motion } from "framer-motion"
import { fadeUp } from "../../constants/motionVariants"
import Button from "../ui/Button"
import Input from "../ui/Input"

const validate = (data) => {
  const errs = {}
  if (!data.name.trim()) errs.name = "Name is required"
  if (!data.email.trim()) errs.email = "Email is required"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email address"
  if (!data.message.trim()) errs.message = "A message is required"
  return errs
}

const FieldError = ({ msg }) => (
  <p className="text-red-400 text-xs mt-1">{msg}</p>
)

const ContactForm = ({ formData, handleChange, handleSubmit, formStatus }) => {
  const [errors, setErrors] = useState({})

  const onChange = (e) => {
    handleChange(e)
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: "" }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(formData)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    handleSubmit(e)
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}>
      <p className="text-label uppercase tracking-widest text-text-2 mb-2">
        Get In Touch
      </p>
      <h2 className="text-section text-text-1 mb-6">Contact Me</h2>
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="home-name" className="text-xs text-text-2 font-medium">
            Name
          </label>
          <Input
            id="home-name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={onChange}
            error={!!errors.name}
          />
          {errors.name && <FieldError msg={errors.name} />}
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
            onChange={onChange}
            error={!!errors.email}
          />
          {errors.email && <FieldError msg={errors.email} />}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="home-message" className="text-xs text-text-2 font-medium">
            Message
          </label>
          <Input
            id="home-message"
            multiline
            name="message"
            placeholder="What are you working on?"
            rows={4}
            value={formData.message}
            onChange={onChange}
            error={!!errors.message}
          />
          {errors.message && <FieldError msg={errors.message} />}
        </div>
        <Button type="submit" className="w-full justify-center mt-2 lg:mt-1">
          Send Message
        </Button>
        {formStatus === "success" && (
          <div className="flex items-start gap-3 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3">
            <svg className="text-green-400 mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <div>
              <p className="text-green-400 text-sm font-medium">Message received!</p>
              <p className="text-green-400/70 text-xs mt-0.5">I&apos;ll get back to you as soon as I can.</p>
            </div>
          </div>
        )}
        {formStatus === "error" && (
          <div className="flex items-start gap-3 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3">
            <svg className="text-red-400 mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <p className="text-red-400 text-sm font-medium">That didn&apos;t go through.</p>
              <p className="text-red-400/70 text-xs mt-0.5">Please try again or email me directly.</p>
            </div>
          </div>
        )}
      </form>
    </motion.div>
  )
}

export default ContactForm
