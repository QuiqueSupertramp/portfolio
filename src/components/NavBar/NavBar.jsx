import logo from '../../images/QS_logo.png';
import './NavBar.css';

export const NavBar = () => {
	return (
		<section className='navBar'>
			<img src={logo} alt='' className='navBar__logo' />
			<nav>
				<ul className='navBar__ul'>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#skills'>Skills</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#form'>Contact</a>
					</li>
				</ul>
			</nav>
		</section>
	);
};
