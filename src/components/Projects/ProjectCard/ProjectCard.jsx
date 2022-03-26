import data from '../ProjectsData.js';

const ProjectCard = ({ project }) => {
	const dataProject = data[project];

	return (
		<div className='project'>
			<h3 className='project__h3'>{dataProject.title}</h3>
			<div className='project__images'>
				{dataProject.images.map(el => (
					<img src={el.img} alt='' className={el.class} key={el} />
				))}
			</div>
			<p className='project__description'>{dataProject.desc}</p>
			{/* <div className='project__technologies'>
				{dataProject.technologies.map(el => (
					<h4 key={el}>{el}</h4>
				))}
			</div> */}
			<div className='project__links'>
				<a href='' className='btn btn--filled'>
					Code
				</a>
				<a href='' className='btn btn--filled'>
					Web
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
