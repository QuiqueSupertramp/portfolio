const SoftSkillsCard = ({ softSkill }) => {
	return (
		<div className='softSkills__wrapper'>
			<div className='softSkills__title'>
				<img src={softSkill.img} alt='' />
				<h4>{softSkill.title}</h4>
			</div>
			<p>{softSkill.desc}</p>
		</div>
	);
};

export default SoftSkillsCard;
