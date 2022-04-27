import Title from '../Title/Title';
import './Contact.css';

import useObserver from '../../hooks/useObserver';
import ContactForm from './ContactForm/ContactForm';

const github = 'images/social/github.svg';
const linkedin = 'images/social/linkedin.svg';
const instagram = 'images/social/instagram.svg';

const Contact = () => {
	const { ref: contactRef } = useObserver();

	return (
		<section id="contact">
			<div className="contact" ref={contactRef}>
				<Title text="Say Hello!" number="5" />
				<div className="contact__container">
					<div className="contact__sidebar">
						<div className="contact__text">
							<p>
								Gracias por llegar hasta aquí. Espero que este portfolio, hecho
								con mucho cariño, haya sido de tu agrado.
							</p>
							<br />
							<p>
								Contacta conmigo a través del correo electrónico, redes sociales
								o rellenando el formulario. Hasta pronto!
							</p>
						</div>
						<div className="contact__social">
							<a href="mailto:quiquesupertramp@gmail.com">
								<p>quiquesupertramp@gmail.com</p>
							</a>
							<div className="contact__links">
								<a
									href="https://linkedin.com/in/quiquesupertramp"
									className="btn--rounded"
									target="_blank"
									rel="noreferrer">
									<img src={linkedin} alt="linkedin" />
								</a>
								<a
									href="https://github.com/QuiqueSupertramp"
									className="btn--rounded"
									target="_blank"
									rel="noreferrer">
									<img src={github} alt="github" />
								</a>
								<a
									href="https://instagram.com/quiquesupertramp"
									className="btn--rounded"
									target="_blank"
									rel="noreferrer">
									<img src={instagram} alt="instagram" />
								</a>
							</div>
						</div>
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
