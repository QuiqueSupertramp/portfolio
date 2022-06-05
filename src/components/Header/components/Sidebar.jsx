import LinkButton from '../../Buttons/Button';
import './Sidebar.css';

const Sidebar = () => {
	return (
		<div className="header__text">
			<span className="header__span">const NAME = </span>
			<h1>Quique Supertramp</h1>
			<h2>
				<span className="orange">{'<'}</span>DesarrolladorWeb
				<span className="orange">{'/>'}</span>
			</h2>
			<div className="header__buttons">
				<LinkButton href="#about">About me</LinkButton>
				<LinkButton
					filled={false}
					download="CV Enrique López"
					href="QuiqueLopezCV.pdf">
					Download CV
				</LinkButton>
			</div>
		</div>
	);
};

export default Sidebar;
