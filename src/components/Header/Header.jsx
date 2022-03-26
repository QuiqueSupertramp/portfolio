import './Header.css';
import emoji from '../../images/bienvenidos.png';
import github from '../../images/social/github.svg';
import linkedin from '../../images/social/linkedin.svg';
import instagram from '../../images/social/instagram.svg';

// const text = '<DesarrolladorWeb>';
const a = '<';
const b = ' />';

export const Header = () => {
	return (
		<header className='header'>
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
			<div className='avatarMenu'>
				<div className='header__circle'></div>
				<div className='socials'>
					<a
						href='https://github.com/QuiqueSupertramp'
						className='social'
						target='_blank'
						rel='noreferrer'>
						<img src={github} alt='github' />
					</a>
					<a
						href='https://linkedin.com/in/quiquesupertramp'
						className='social social1'
						target='_blank'
						rel='noreferrer'>
						<img src={linkedin} alt='linkedin' />
					</a>
					<a
						href='https://instagram.com/quiquesupertramp'
						className='social social2'
						target='_blank'
						rel='noreferrer'>
						<img src={instagram} alt='instagram' />
					</a>
				</div>
				<img
					className='header__emoji'
					src={emoji}
					alt='Quique Supertramp Avatar'
				/>
			</div>
		</header>
	);
};
