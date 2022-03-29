import { useState } from 'react';
import './Skills.css';

import Title from '../Title/Title';
import MenuDesktop from './Menu/MenuDesktop';
import useObserver from '../../hooks/useObserver';
import SkillsView from './SkillsView/SkillsView';

const Skills = () => {
	const [view, setView] = useState(1);
	const { ref: skillsRef } = useObserver();
	console.log('skillsRef', skillsRef);

	return (
		<section id='skills'>
			<div className='skills' ref={skillsRef}>
				<Title text='Hard Skills' number='3' />
				<div className='skills__container skills__container--desktop'>
					<MenuDesktop view={view} setView={setView} />
					<div className='skills__wrapper'>
						<SkillsView skill={view} />
					</div>
				</div>
				<div className='skills__container skills__container--mobile'>
					<div className='skills__wrapper'>
						<SkillsView skill='1' />
					</div>
					<div className='skills__wrapper'>
						<SkillsView skill='2' />
					</div>
					<div className='skills__wrapper'>
						<SkillsView skill='3' />
					</div>
					<div className='skills__wrapper'>
						<SkillsView skill='4' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
