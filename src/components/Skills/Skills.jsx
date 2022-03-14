import { useState } from 'react';
import './Skills.css';

import Title from '../Title/Title';
import SkillsMenu from './Menu/SkillsMenu';
import Backend from './views/Backend';
import Frontend from './views/Frontend';
import Scrum from './views/Scrum';
import Tools from './views/Tools';
// import useObserver from '../../hooks/useObserver';

const Skills = () => {
	const [view, setView] = useState('frontend');

	const handleView = e => {
		setView(e.target.dataset.view);
	};

	// const { ref, isIntersecting } = useObserver();

	// useEffect(() => {
	// 	if (ref.current) {
	// 		isIntersecting === true && ref.current.classList.add('showSection');
	// 	}
	// }, [isIntersecting]);

	return (
		<div className='skills'>
			<Title text='Skills' number='2' />
			<div className='skills__container'>
				<SkillsMenu view={view} handleView={handleView} />
				<div className='skills__wrapper'>
					{view === 'frontend' && <Frontend />}
					{view === 'backend' && <Backend />}
					{view === 'tools' && <Tools />}
					{view === 'scrum' && <Scrum />}
				</div>
			</div>
		</div>
	);
};

export default Skills;
