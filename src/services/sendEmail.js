const URL = 'https://formspree.io/f/xnqwvpbo';

const sendEmail = async data => {
	const fetchMail = await fetch(URL, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			Accept: 'application/json',
		},
	});
	const res = await fetchMail.json();

	return res;
};

export default sendEmail;
