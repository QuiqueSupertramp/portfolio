import LinkButton from '../../Buttons/Button';

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
				<LinkButton
					href={project.links.web}
					target="_blank"
					rel="noopener noreferrer">
					Web
				</LinkButton>
				<LinkButton
					href={project.links.code}
					target="_blank"
					rel="noopener noreferrer">
					{project.links.code2 ? 'Frontend Code' : 'Code'}
				</LinkButton>

				{project.links.code2 && (
					<LinkButton
						href={project.links.code2}
						target="_blank"
						rel="noopener noreferrer">
						Backend Code
					</LinkButton>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
