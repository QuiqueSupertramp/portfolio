import { useEffect, useRef } from 'react';
import SKILLS_VIEW from '../../../lib/constants/skillsView';
import SkillsButton from '../../Buttons/SkillsButton';

const MenuDesktop = ({ view, setView }) => {
	const bar = useRef(null);

	useEffect(() => {
		setBar(view, bar);
	}, [view]);

	return (
		<nav className="skills__menu">
			<ul>
				<div className="skills__bar" ref={bar}></div>
				<SkillsButton view={view} setView={setView} skill={FRONTEND} />
				<SkillsButton view={view} setView={setView} skill={BACKEND} />
				<SkillsButton view={view} setView={setView} skill={TOOLS} />
				<SkillsButton view={view} setView={setView} skill={METHODOLOGIES} />
			</ul>
		</nav>
	);
};

const FRONTEND = SKILLS_VIEW.FRONTEND;
const BACKEND = SKILLS_VIEW.BACKEND;
const TOOLS = SKILLS_VIEW.TOOLS;
const METHODOLOGIES = SKILLS_VIEW.METHODOLOGIES;

const setBar = (view, bar) => {
	if (view === FRONTEND[0]) bar.current.style.transform = 'translateY(0rem)';
	if (view === BACKEND[0]) bar.current.style.transform = 'translateY(2.5rem)';
	if (view === TOOLS[0]) bar.current.style.transform = 'translateY(5rem)';
	if (view === METHODOLOGIES[0])
		bar.current.style.transform = 'translateY(7.5rem)';
};

export default MenuDesktop;
