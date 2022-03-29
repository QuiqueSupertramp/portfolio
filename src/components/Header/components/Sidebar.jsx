const a = '<';
const b = ' />';

const Sidebar = () => {
	return (
		<div className='header__text'>
			<span className='header__span'>const NAME = </span>
			<h1>Quique Supertramp</h1>
			<h2>
				<span className='orange'>{a}</span>DesarrolladorWeb
				<span className='orange'>{b}</span>
			</h2>
			<div className='header__buttons'>
				<a href='#about' className='btn btn--filled'>
					About Me
				</a>
				<button className='btn btn--ghost'>Resume</button>
			</div>
		</div>
	);
};

export default Sidebar;
