import './Contact.css';

import Title from '../Title/Title';
import ContactSidebar from './components/ContactSidebar/ContactSidebar';
import ContactForm from './components/ContactForm/ContactForm';

import useObserver from '../../hooks/useObserver';

const Contact = () => {
	const { ref: contactRef } = useObserver();

	return (
		<section id="contact">
			<div className="contact" ref={contactRef}>
				<Title text="Say Hello!" number="5" />
				<div className="contact__container">
					<ContactSidebar />
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
