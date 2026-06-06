import Card from "../ui/Card"

const FeaturedProjectCard = ({ project }) => (
  <Card className="overflow-hidden group hover:border-white/20 transition-colors duration-300 h-full flex flex-col">
    <div className="aspect-video overflow-hidden bg-bg flex-shrink-0">
      <img
        src={project.iconImage}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-text-1 font-semibold text-base mb-1">{project.title}</h3>
      <p className="text-text-2 text-xs mb-3 leading-relaxed flex-1">{project.shortDesc}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-sm font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary mt-auto">
        View Project →
      </a>
    </div>
  </Card>
)

export default FeaturedProjectCard
