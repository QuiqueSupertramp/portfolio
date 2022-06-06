import LinkButton from '../Buttons/LinkButton';

const Sidebar = () => {
	return (
		<div className="about__sidebar">
			<div className="about__photo">
				<img src="images/quiquePerfil.png" alt="foto portfolio" />
			</div>
			<div className="about__links">
				<LinkButton href="#softSkills">Soft Skills</LinkButton>
				<LinkButton href="#skills">Hard Skills</LinkButton>
				<LinkButton href="#projects">Projects</LinkButton>
			</div>
		</div>
	);
};

export default Sidebar;