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
				<a href="#about" className="btn btn--filled">
					About Me
				</a>
				<a
					download="CV Enrique López"
					href="resources/QuiqueLopezCV.pdf"
					className="btn btn--ghost">
					Download CV
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
