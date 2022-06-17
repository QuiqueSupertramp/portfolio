import './Contact.css';

import Title from '../Title/Title';
import ContactSidebar from './ContactSidebar';
import ContactForm from './ContactForm';

import useObserver from '../../hooks/useObserver';

const Contact = () => {
	const { ref: contactRef } = useObserver();

	return (
		<section id="contact">
			<div className="contact" ref={contactRef}>
				<Title text="Contacto" number="5" />
				<div className="contact__container">
					<ContactSidebar />
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
