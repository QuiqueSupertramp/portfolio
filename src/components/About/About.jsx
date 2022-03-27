import Title from '../Title/Title';
import './About.css';
import photo from '../../images/quique1.png';
import useObserver from '../../hooks/useObserver';

const About = () => {
	const { ref: aboutRef } = useObserver();
	return (
		<section id='about'>
			<div ref={aboutRef} className='about'>
				<Title text='About Me' number='1' />
				<div className='about__main'>
					<div className='about__sidebar'>
						<div className='photo'>
							<img src={photo} alt='foto portfolio' />
						</div>
						<div className='about__links'>
							<a className='btn btn--filled' href='#softSkills'>
								Soft Skills
							</a>
							<a className='btn btn--filled' href='#skills'>
								Hard Skills
							</a>
							<a className='btn btn--filled' href='#projects'>
								Projects
							</a>
						</div>
					</div>
					<div className='about__text'>
						<h3>Bienvenido!</h3>
						<p>
							Mi nombre es Quique, tengo 37 años y soy de Barcelona. Hace un año
							que empecé a estudiar programación y he descubierto que tiene
							mucho que ver con el mundo del que vengo.
							<br />
							<br />
							Soy entrenador de baloncesto y los últimos 6 años he estado
							dirigiendo un club de casi 200 familias, lo que me ha permitido
							desarrolllar habilidades personales, metodologicas y de gestión
							muy valiosas para cualquier trabajo en equipo.
							<br />
							<br />
							Ahora busco mi primera oportunidad laboral en el mundo del
							desarrollo web. Llevo un año preparándome de forma autodidacta y
							el siguiente paso que necesito es convivir y trabajar a diario con
							profesionales.
							<br />
							<br />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
