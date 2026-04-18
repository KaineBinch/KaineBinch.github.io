const baseClasses = 'w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-text-1 placeholder-text-2 text-sm transition-colors duration-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'

const Input = ({ multiline = false, className = '', ...props }) => {
  if (multiline) {
    return (
      <textarea
        className={`${baseClasses} resize-none ${className}`}
        {...props}
      />
    )
  }

  return (
    <input
      className={`${baseClasses} ${className}`}
      {...props}
    />
  )
}

export default Input
