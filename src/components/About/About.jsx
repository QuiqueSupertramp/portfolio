import Title from '../Title/Title';
import './About.css';
import photo from '../../images/quique1.png';

const About = () => {
	return (
		<section className='about' id='about'>
			<Title text='About Me' number='1' />
			<div className='about__main'>
				<div className='photo'>
					<img src={photo} alt='' />
				</div>
				<div className='about__text'>
					<p>
						Mi nombre es Enrique López, tengo 37 años y actualmente resido en
						Barcelona. A los 18 años empecé Ingeniería Informática de Gestión en
						la UPC, carrera que tuve que dejar en segundo al mudarme a Granada.
						Durante 5 años estuve trabajando como comercial en el sector de las
						telecomunicaciones.
					</p>
					<p>
						Al volver a Barcelona estudié Administración y Dirección de
						Empresas, pero acabando las prácticas me surgió la oportunidad de
						dedicarme profesionalmente al baloncesto, además de como entrenador,
						gestionando un club desde la dirección técnica y deportiva.
					</p>
					<p>
						Hace un año decidí retomar mi relación con la informática. Después
						de adquirir los conocimientos mínimos, el siguiente paso que
						necesito para crecer es trabajar rodeado de programadores con
						experiencia de los que aprender a diario.
					</p>
					<p>
						Las skills que puedo aportar a cualquier equipo de trabajo gracias
						al deporte y a mi experiencia como comercial y como director de un
						club son las siguientes:
					</p>
					<div className='about__skills'>
						<ul>
							<li>Trabajo en equipo</li>
							<li>Empatía</li>
							<li>Liderazgo</li>
							<li>Focus en encontrar soluciones</li>
							<li>Autodidacta</li>
							<li>Toma de decisiones</li>
							<li>Trabajo bajo presión</li>
							<li>Trabajo con metodologías</li>
							<li>Conocimiento de los procesos de aprendizaje</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
