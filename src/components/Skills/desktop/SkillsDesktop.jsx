import { useState } from 'react';
import MenuDesktop from './MenuDesktop';
import SkillsCardDesktop from './SkillsCardDesktop';

const SkillsDesktop = () => {
	const [view, setView] = useState(1);

	return (
		<div className="skills__container skills__container--desktop">
			<MenuDesktop view={view} setView={setView} />
			<SkillsCardDesktop skill={view} />
		</div>
	);
};

export default SkillsDesktop;
