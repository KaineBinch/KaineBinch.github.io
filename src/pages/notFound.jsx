import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import Button from "../components/ui/Button"
import { pageTransition } from "../constants/motionVariants"

const INITIAL_REDIRECT_TIME = 10

const NotFound = () => {
  const [redirectTime, setRedirectTime] = useState(INITIAL_REDIRECT_TIME)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (redirectTime > 0) setRedirectTime((t) => t - 1)
      else window.location.href = "/"
    }, 1000)
    return () => clearTimeout(timeout)
  }, [redirectTime])

  const progress = (redirectTime / INITIAL_REDIRECT_TIME) * 100

  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen flex items-center justify-center px-6">
      <Helmet>
        <title>Kaine Binch | 404</title>
      </Helmet>

      <div className="text-center max-w-sm">
        <p className="text-label uppercase tracking-widest text-text-2 mb-4">
          Page Not Found
        </p>
        <h1 className="text-hero text-primary mb-4">404</h1>
        <p className="text-text-2 mb-10 leading-relaxed">
          That page doesn&apos;t exist. You&apos;ll be sent home automatically.
        </p>

        <div className="mb-6">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-text-2 text-xs">
            Redirecting in {redirectTime}s&hellip;
          </p>
        </div>

        <Button href="/#/">Take me home now</Button>
      </div>
    </motion.div>
  )
}

export default NotFound
