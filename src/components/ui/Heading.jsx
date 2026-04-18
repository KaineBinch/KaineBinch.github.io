const Heading = ({ variant = 'section', primary, secondary, children, className = '' }) => {
  if (variant === 'hero') {
    return (
      <h1 className={`text-hero text-text-1 ${className}`}>
        {children}
      </h1>
    )
  }

  if (variant === 'label') {
    return (
      <p className={`text-label uppercase tracking-widest text-text-2 ${className}`}>
        {children}
      </p>
    )
  }

  // section variant — two-tone: white primary line + muted secondary line
  return (
    <h2 className={`text-section ${className}`}>
      <span className="text-text-1 block">{primary}</span>
      {secondary && <span className="text-text-2 block">{secondary}</span>}
    </h2>
  )
}

export default Heading
