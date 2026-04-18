const Card = ({ children, className = '' }) => (
  <div className={`bg-surface border border-white/10 rounded-xl ${className}`}>
    {children}
  </div>
)

export default Card
