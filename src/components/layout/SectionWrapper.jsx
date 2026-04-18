const SectionWrapper = ({ children, label, className = '' }) => (
  <section className={`py-24 lg:py-32 ${className}`}>
    {label && (
      <p className="text-label uppercase tracking-widest text-text-2 mb-4">{label}</p>
    )}
    {children}
  </section>
)

export default SectionWrapper
