import data from '../ProjectsData.js';

const ProjectCard = ({ project }) => {
	const dataProject = data[project];

	return (
		<div className='project'>
			<div className='project__images'>
				{dataProject.images.map((el, index) => (
					<img src={el.img} alt='' className={el.class} key={index} />
				))}
			</div>
			<h3 className='project__h3'>{dataProject.title}</h3>
			<p className='project__description'>{dataProject.desc}</p>
			{/* {dataProject.desc} */}
			{/* <div className='project__technologies'>
				<ul>
					{dataProject.technologies.map((el, index) => (
						<li key={index}>{el}</li>
					))}
				</ul>
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
