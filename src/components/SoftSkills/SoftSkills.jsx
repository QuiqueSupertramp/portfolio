import './SoftSkills.css';
import useObserver from '../../hooks/useObserver';
import data from './SoftSkillsData';

import Title from '../Title/Title';
import SoftSkillsCard from './SoftSkillsCard/SoftSkillsCard';

const SoftSkills = () => {
	const { ref: softSkillsRef } = useObserver();
	return (
		<section id='softSkills'>
			<div className='softSkills' ref={softSkillsRef}>
				<Title number='2' text='Soft Skills' />
				<div className='softSkills__container'>
					{data.map((el, index) => (
						<SoftSkillsCard key={index} softSkill={el} />
					))}
				</div>
			</div>
		</section>
	);
};

export default SoftSkills;
