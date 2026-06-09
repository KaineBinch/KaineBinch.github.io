const baseClasses = 'w-full bg-surface border rounded-lg px-4 py-3 text-text-1 placeholder-text-2 text-sm transition-colors duration-200 focus:outline-none'

const Input = ({ multiline = false, className = '', error = false, ...props }) => {
  const borderClasses = error
    ? 'border-red-500/60 focus:border-red-400 focus:ring-1 focus:ring-red-400'
    : 'border-white/10 focus:border-primary focus:ring-1 focus:ring-primary'

  if (multiline) {
    return (
      <textarea
        className={`${baseClasses} ${borderClasses} resize-none ${className}`}
        {...props}
      />
    )
  }

  return (
    <input
      className={`${baseClasses} ${borderClasses} ${className}`}
      {...props}
    />
  )
}

export default Input
