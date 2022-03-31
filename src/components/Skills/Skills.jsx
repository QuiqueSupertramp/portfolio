import { useState } from 'react';
import './Skills.css';

import Title from '../Title/Title';
import MenuDesktop from './Menu/MenuDesktop';
import useObserver from '../../hooks/useObserver';
import SkillsView from './SkillsView/SkillsView';
import SkillsViewMobile from './SkillsViewMobile/SkillsViewMobile';

const Skills = () => {
	const [view, setView] = useState(1);
	const { ref: skillsRef } = useObserver();

	return (
		<section id='skills'>
			<div className='skills' ref={skillsRef}>
				<Title text='Hard Skills' number='3' />
				<div className='skills__container skills__container--desktop'>
					<MenuDesktop view={view} setView={setView} />
					<SkillsView skill={view} />
				</div>
				<div className='skills__container skills__container--mobile'>
					<SkillsViewMobile skill='1' />
					<SkillsViewMobile skill='2' />
					<SkillsViewMobile skill='3' />
					<SkillsViewMobile skill='4' />
				</div>
			</div>
		</section>
	);
};

export default Skills;
