const ProjectCard = ({ title, shortDesc, longDesc, tags, link, iconImage }) => {
  return (
    <div>
      <div className="card bg-base-300 bg-opacity-10 backdrop-blur-md shadow-xl">
        <figure>
          <img src={iconImage} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-start visible xl:hidden">{shortDesc}</p>
          <p className="text-start xl:block hidden">{longDesc}</p>
          <div className="card-actions justify-end mb-2">
            <a
              href={link}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary text-neutral-focus"
            >
              Take a look!
            </a>
          </div>
          <div className="flex flex-row">
            {tags.map((tag, i) => (
              <div key={i} className="badge badge-outline mx-1">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
