const ProjectCard = ({ title, shortDesc, longDesc, tags, link, iconImage }) => {
  return (
    <div>
      <div className="card bg-base-300 bg-opacity-10 backdrop-blur-md shadow-xl ">
        <div className="w-400px h-150px min-w-[300px] min-h-[150px]">
          <img src={iconImage} />
        </div>
        <div className="card-body h-[300px]">
          <h2 className="card-title">{title}</h2>
          <p className="text-start visible xl:hidden">{shortDesc}</p>
          <p className="text-start xl:block hidden">{longDesc}</p>
          <div className="card-actions justify-end mb-5">
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
