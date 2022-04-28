const html = 'images/skills/frontend/html.svg';
const css = 'images/skills/frontend/css.svg';
const js = 'images/skills/frontend/js.svg';
const react = 'images/skills/frontend/react.svg';
const vue = 'images/skills/frontend/vue.svg';
const tailwind = 'images/skills/frontend/tailwind.svg';
const node = 'images/skills/backend/node.svg';
const express = 'images/skills/backend/express.svg';
const mongoDB = 'images/skills/backend/mongo.svg';
const vite = 'images/skills/tools/vite.svg';
const git = 'images/skills/tools/git.svg';
const npm = 'images/skills/tools/npm.svg';
const eslint = 'images/skills/tools/eslint.svg';
const scrum = 'images/skills/scrum/scrum.svg';

const data = {
	1: {
		title: 'Frontend',
		desc: 'Me atrae porque es el área que tiene relación directa con el cliente. Considero importante dominar HTML, CSS y JAVASCRIPT nativos. En cuanto a frameworks, empecé con VUE y ahora me estoy especializando en REACT. También he trabajado con librerias de css como TAILWIND.',
		images: [
			{ img: html, text: 'HTML' },
			{ img: css, text: 'CSS' },
			{ img: js, text: 'JavaScript' },
			{ img: react, text: 'React' },
			{ img: vue, text: 'Vue' },
			{ img: tailwind, text: 'Tailwind' },
		],
	},
	2: {
		title: 'Backend',
		desc: 'Imprescindible poder crear un crud con NODE y EXPRESS. En cuanto a bases de datos, por ahora he trabajado sólo con MONGODB. Sin duda es un área en la que también me gustaría seguir formándome.',
		images: [
			{ img: node, text: 'NodeJS' },
			{ img: express, text: 'Express' },
			{ img: mongoDB, text: 'MongoDB' },
		],
	},
	3: {
		title: 'Tools',
		desc: 'En mi día a día trabajo con algunas herramientas como GIT, ESLINT o NPM, y estoy aprendiendo otras como VITE, utilizado para este proyecto. Ahora me falta aprender a usarlas de manera profesional dentro de un equipo.',
		images: [
			{ img: git, text: 'Git' },
			{ img: vite, text: 'Vite' },
			{ img: npm, text: 'NPM' },
			{ img: eslint, text: 'esLint' },
		],
	},
	4: {
		title: 'Methodologies',
		desc: 'He leído mucho sobre metodologías ágiles y dada mi experiencia en el deporte son formas de organizar equipos que me resultan familiares. SCRUM, por ejemplo, es una metodología que viene del rugby.',
		images: [{ img: scrum, text: 'Scrum' }],
	},
};

export default data;
