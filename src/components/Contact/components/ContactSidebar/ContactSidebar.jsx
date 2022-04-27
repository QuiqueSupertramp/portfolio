const ContactSidebar = () => {
	return (
		<div className="contact__sidebar">
			<div className="contact__text">
				<p>
					Gracias por llegar hasta aquí. Espero que este portfolio, hecho con
					mucho cariño, haya sido de tu agrado.
				</p>
				<br />
				<p>
					Contacta conmigo a través del correo electrónico, redes sociales o
					rellenando el formulario. Hasta pronto!
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
						<img
							src="images/social/linkedin.svg"
							alt="linkedin"
							title="LinkedIn"
						/>
					</a>
					<a
						href="https://github.com/QuiqueSupertramp"
						className="btn--rounded"
						target="_blank"
						rel="noreferrer">
						<img src="images/social/github.svg" alt="github" title="GitHub" />
					</a>
					<a
						href="https://instagram.com/quiquesupertramp"
						className="btn--rounded"
						target="_blank"
						rel="noreferrer">
						<img
							src="images/social/instagram.svg"
							alt="instagram"
							title="Instagram"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactSidebar;
