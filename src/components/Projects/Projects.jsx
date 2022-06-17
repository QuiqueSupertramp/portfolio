import './Projects.css';
import useObserver from '../../hooks/useObserver';
import Title from '../Title/Title';
import projectsData from './ProjectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
	const { ref: projectsRef } = useObserver();

	return (
		<section id="projects">
			<div className="projects" ref={projectsRef}>
				<Title text="Proyectos" number="4" />
				<div className="projects__main">
					{projectsData.map(project => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
