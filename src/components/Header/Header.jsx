import './Header.css';
import emoji from '../../images/bienvenidos.png';

// const text = '<DesarrolladorWeb>';
const a = '<';
const b = ' />';

export const Header = () => {
	return (
		<header className='header'>
			<span className='header__span'>const NAME = </span>
			<h1>Quique Supertramp</h1>
			<h2>
				<span className='orange'>{a}</span>DesarrolladorWeb
				<span className='orange'>{b}</span>
			</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
				voluptates ex aliquid nobis facere voluptatibus, corrupti saepe possimus
				illum, esse aspernatur sint error!
			</p>
			<div className='header__circle'></div>

			<img className='header__emoji' src={emoji} alt='' />
		</header>
	);
};
