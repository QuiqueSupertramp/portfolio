import './Skills.css';
import useObserver from '../../hooks/useObserver';
import Title from '../Title/Title';
import SkillsDesktop from './desktop/SkillsDesktop';
import SkillsMobile from './mobile/SkillsMobile';

const Skills = () => {
	const { ref: skillsRef } = useObserver();

	return (
		<section id="skills">
			<div className="skills" ref={skillsRef}>
				<Title text="Hard Skills" number="3" />
				<SkillsDesktop />
				<SkillsMobile />
			</div>
		</section>
	);
};

export default Skills;
