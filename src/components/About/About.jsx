import './About.css';
import useObserver from '../../hooks/useObserver';
import Title from '../Title/Title';
import Sidebar from './Sidebar';
import Presentation from './Presentation';

const About = () => {
	const { ref: aboutRef } = useObserver();
	return (
		<section id="about">
			<div ref={aboutRef} className="about">
				<Title text="About Me" number="1" />
				<div className="about__main">
					<Sidebar />
					<Presentation />
				</div>
			</div>
		</section>
	);
};

export default About;
