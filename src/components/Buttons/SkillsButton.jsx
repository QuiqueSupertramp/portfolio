const SkillsButton = ({ view, setView, skill }) => {
	const [skillView, skillName] = skill;
	return (
		<li>
			<button
				onClick={() => setView(skillView)}
				className={view === skillView ? 'skills__active' : null}>
				{skillName}
			</button>
		</li>
	);
};

export default SkillsButton;
