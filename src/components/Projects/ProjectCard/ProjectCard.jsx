import data from '../ProjectsData.js';

const ProjectCard = ({ project }) => {
	const dataProject = data[project];

	return (
		<div className="project">
			<div className="project__images">
				{dataProject.images.map((el, index) => (
					<img src={el.img} alt="" className={el.class} key={index} />
				))}
			</div>
			<h3 className="project__h3">{dataProject.title}</h3>
			<p className="project__description">{dataProject.desc}</p>
			<div className="project__links">
				<a
					href={dataProject.links.web}
					target="_blank"
					rel="noreferrer"
					className="btn btn--filled">
					Web
				</a>
				<a
					href={dataProject.links.code}
					target="_blank"
					rel="noreferrer"
					className="btn btn--filled">
					{dataProject.links.code2 ? 'Frontend Code' : 'Code'}
				</a>
				{dataProject.links.code2 && (
					<a
						href={dataProject.links.code2}
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
