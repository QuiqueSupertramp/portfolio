import { useEffect, useRef } from 'react';

const MenuDesktop = ({ view, setView }) => {
	const bar = useRef(null);

	const handleView = e => {
		setView(Number(e.target.dataset.view));
	};

	useEffect(() => {
		if (view === 1) bar.current.style.transform = 'translateY(0rem)';
		if (view === 2) bar.current.style.transform = 'translateY(2.5rem)';
		if (view === 3) bar.current.style.transform = 'translateY(5rem)';
		if (view === 4) bar.current.style.transform = 'translateY(7.5rem)';
	}, [view]);

	return (
		<nav className="skills__menu">
			<ul>
				<div className="skills__bar" ref={bar}></div>
				<li>
					<button
						data-view="1"
						onClick={handleView}
						className={view === 1 ? 'skills__active' : null}>
						Frontend
					</button>
				</li>
				<li>
					<button
						data-view="2"
						onClick={handleView}
						className={view === 2 ? 'skills__active' : null}>
						Backend
					</button>
				</li>
				<li>
					<button
						data-view="3"
						onClick={handleView}
						className={view === 3 ? 'skills__active' : null}>
						Tools
					</button>
				</li>
				<li>
					<button
						data-view="4"
						onClick={handleView}
						className={view === 4 ? 'active' : null}>
						Methodologies
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default MenuDesktop;
