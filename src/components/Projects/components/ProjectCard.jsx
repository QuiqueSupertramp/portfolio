const ProjectCard = ({ project }) => {
	return (
		<div className="project__card">
			<div className="project__images">
				<img
					src={project.images.desktop.img}
					alt={project.images.desktop.alt}
					className="project__img project__img--desktop"
				/>
				<img
					src={project.images.tablet.img}
					alt={project.images.tablet.alt}
					className="project__img project__img--tablet"
				/>
				<img
					src={project.images.mobile.img}
					alt={project.images.mobile.alt}
					className="project__img project__img--mobile"
				/>
			</div>
			<h3 className="project__h3">{project.title}</h3>
			<p className="project__description">{project.desc}</p>
			<div className="project__links">
				<a
					href={project.links.web}
					target="_blank"
					rel="noreferrer"
					className="btn btn--filled">
					Web
				</a>
				<a
					href={project.links.code}
					target="_blank"
					rel="noreferrer"
					className="btn btn--filled">
					{project.links.code2 ? 'Frontend Code' : 'Code'}
				</a>
				{project.links.code2 && (
					<a
						href={project.links.code2}
						target="_blank"
						rel="noreferrer"
						className="btn btn--filled">
						Backend Code
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
