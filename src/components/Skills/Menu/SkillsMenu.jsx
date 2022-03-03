import { useEffect, useRef } from 'react';

const SkillsMenu = ({ view, handleView }) => {
	const bar = useRef(null);

	useEffect(() => {
		if (view === 'frontend') bar.current.style.transform = 'translateY(0rem)';
		if (view === 'backend') bar.current.style.transform = 'translateY(2.5rem)';
		if (view === 'tools') bar.current.style.transform = 'translateY(5rem)';
		if (view === 'scrum') bar.current.style.transform = 'translateY(7.5rem)';
	}, [view]);

	return (
		<nav className='skills__menu'>
			<ul>
				<div className='skills__bar' ref={bar}></div>
				<li>
					<button
						data-view='frontend'
						onClick={handleView}
						className={view === 'frontend' ? 'active' : null}>
						Frontend
					</button>
				</li>
				<li>
					<button
						data-view='backend'
						onClick={handleView}
						className={view === 'backend' ? 'active' : null}>
						Backend
					</button>
				</li>
				<li>
					<button
						data-view='tools'
						onClick={handleView}
						className={view === 'tools' ? 'active' : null}>
						Tools
					</button>
				</li>
				<li>
					<button
						data-view='scrum'
						onClick={handleView}
						className={view === 'scrum' ? 'active' : null}>
						Scrum
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default SkillsMenu;
