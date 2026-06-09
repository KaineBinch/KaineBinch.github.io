const variantClasses = {
  default: 'bg-white/10 text-text-2',
  primary: 'bg-primary/15 text-primary',
}

const Tag = ({ children, variant = 'default', className = '' }) => (
  <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 ${variantClasses[variant]} ${className}`}>
    {children}
  </span>
)

export default Tag
