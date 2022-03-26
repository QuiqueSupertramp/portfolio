import { useState } from 'react';
import './Skills.css';

import Title from '../Title/Title';
import SkillsMenu from './Menu/SkillsMenu';
// import Backend from './views/Backend';
// import Frontend from './views/Frontend';
// import Scrum from './views/Scrum';
// import Tools from './views/Tools';
import useObserver from '../../hooks/useObserver';
import SkillsView from './SkillsView/SkillsView';

const Skills = () => {
	const [view, setView] = useState('frontend');

	const { ref: skillsRef } = useObserver();

	const handleView = e => {
		setView(e.target.dataset.view);
	};

	return (
		<section id='skills'>
			<div className='skills' ref={skillsRef}>
				<Title text='Hard Skills' number='3' />
				<div className='skills__container'>
					<SkillsMenu view={view} handleView={handleView} />
					<div className='skills__wrapper'>
						{/* {view === 'frontend' && <Frontend />}
						{view === 'backend' && <Backend />}
						{view === 'tools' && <Tools />}
						{view === 'scrum' && <Scrum />} */}
						<SkillsView skill={view} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
