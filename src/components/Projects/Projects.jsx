import './Projects.css';
import useObserver from '../../hooks/useObserver';

import Title from '../Title/Title';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
	const { ref: projectsRef } = useObserver();

	return (
		<section id='projects'>
			<div className='projects' ref={projectsRef}>
				<Title text='Projects' number='4' />
				<div className='projects__main'>
					<ProjectCard project='todoApp' />
					<ProjectCard project='landingPage' />
				</div>
			</div>
		</section>
	);
};

export default Projects;
