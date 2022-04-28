const URL = `https://formspree.io/f/${import.meta.env.VITE_EMAIL_KEY}`;

const sendEmail = async data => {
	try {
		const fetchMail = await fetch(URL, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				Accept: 'application/json',
			},
		});
		const res = await fetchMail.json();
		return res;
	} catch (res) {
		res.ok = false;
		return res;
	}
};

export default sendEmail;
