import html from '../../images/skills/frontend/html.svg';
import css from '../../images/skills/frontend/css.svg';
import js from '../../images/skills/frontend/js.svg';
import react from '../../images/skills/frontend/react.svg';
import vue from '../../images/skills/frontend/vue.svg';
import node from '../../images/skills/backend/node.svg';
import express from '../../images/skills/backend/express.svg';
import mongoDB from '../../images/skills/backend/mongo.svg';
import vite from '../../images/skills/tools/vite.svg';
import git from '../../images/skills/tools/git.svg';
import npm from '../../images/skills/tools/npm.svg';
import eslint from '../../images/skills/tools/eslint.svg';
import scrum from '../../images/skills/scrum/scrum.svg';

const data = {
	1: {
		title: 'Frontend',
		desc: 'Me atrae porque es el área que tiene relación directa con el cliente. Considero importante dominar HTML, CSS y JAVASCRIPT nativos. En cuanto a frameworks, empecé con VUE y ahora me estoy especializando en REACT.',
		imgs: [html, css, js, react, vue],
	},
	2: {
		title: 'Backend',
		desc: 'Imprescindible poder crear un crud con NODE y EXPRESS. En cuanto a bases de datos, por ahora he trabajado sólo con MONGODB. Sin duda es un área en la que también me gustaría seguir formándome.',
		imgs: [node, express, mongoDB],
	},
	3: {
		title: 'Tools',
		desc: 'En mi día a día trabajo con algunas herramientas como GIT, ESLINT o NPM, y estoy aprendiendo otras como VITE, utilizado para este proyecto. Ahora me falta aprender a usarlas de manera profesional dentro de un equipo.',
		imgs: [git, vite, npm, eslint],
	},
	4: {
		title: 'Scrum',
		desc: 'He leído mucho sobre metodologías ágiles y dada mi experiencia en el deporte son formas de organizar equipos que me resultan familiares. SCRUM, por ejemplo, es una metodología que viene del rugby.',
		imgs: [scrum],
	},
};

export default data;
