import data from '../SkillsData';
import SkillsViewMobile from './SkillsViewMobile';

const SkillsMobile = () => {
	const skills = Object.values(data);

	return (
		<div className="skills__container skills__container--mobile">
			{skills.map(skill => (
				<SkillsViewMobile key={skill.title} skill={skill} />
			))}
		</div>
	);
};

export default SkillsMobile;
