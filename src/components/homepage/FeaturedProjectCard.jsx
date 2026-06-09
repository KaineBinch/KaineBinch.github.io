import Card from "../ui/Card"
import Tag from "../ui/Tag"

const FeaturedProjectCard = ({ project, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={`Learn more about ${project.title}`}
    className="block w-full h-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-xl">
    <Card className="overflow-hidden group hover:border-white/20 transition-colors duration-300 h-full flex flex-col cursor-pointer">
      <div className="aspect-video overflow-hidden bg-bg flex-shrink-0">
        <img
          src={project.iconImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <h3 className="text-text-1 font-semibold text-base mb-1">{project.title}</h3>
        <p className="text-text-2 text-xs mb-3 leading-relaxed flex-1">{project.shortDesc}</p>
        <span className="text-primary text-sm font-medium mt-auto">View Project →</span>
      </div>
    </Card>
  </button>
)

export default FeaturedProjectCard
