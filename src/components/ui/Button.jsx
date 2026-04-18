const variantClasses = {
  primary: 'bg-primary text-bg font-semibold hover:brightness-110',
  secondary: 'border border-primary text-primary hover:bg-primary/10',
  ghost: 'text-text-2 hover:text-text-1 hover:underline',
}

const baseClasses = 'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

const Button = ({ children, variant = 'primary', href, onClick, className = '', ...props }) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
