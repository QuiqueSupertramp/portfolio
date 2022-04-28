import './Projects.css';
import useObserver from '../../hooks/useObserver';
import Title from '../Title/Title';
import ProjectCard from './components/ProjectCard';
import projectsData from './ProjectsData';

const Projects = () => {
	const { ref: projectsRef } = useObserver();

	return (
		<section id="projects">
			<div className="projects" ref={projectsRef}>
				<Title text="Projects" number="4" />
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
