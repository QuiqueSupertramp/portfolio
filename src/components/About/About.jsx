import Title from '../Title/Title';
import './About.css';
import useObserver from '../../hooks/useObserver';
import Sidebar from './componets/Sidebar';
import Presentation from './componets/Presentation';

const About = () => {
	const { ref: aboutRef } = useObserver();
	return (
		<section id='about'>
			<div ref={aboutRef} className='about'>
				<Title text='About Me' number='1' />
				<div className='about__main'>
					<Sidebar />
					<Presentation />
				</div>
			</div>
		</section>
	);
};

export default About;
