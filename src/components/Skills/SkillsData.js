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
		desc: 'Me atrae porque es el área que tiene relación directa con el cliente. Me gusta dominar CSS y JavaScript Vanilla. En cuanto a frameworks, empecé con Vue y ahora me estoy especializando en React.',
		imgs: [html, css, js, react, vue],
	},
	2: {
		title: 'Backend',
		desc: 'He desarrollado una API REST para una lista de tareas con Node y MongoDB y sin duda es un área en la que también me gustaría seguir formándome.',
		imgs: [node, express, mongoDB],
	},
	3: {
		title: 'Tools',
		desc: 'He trabajado con varias de las herramientas que se entienden como básicas, pero me falta aprender a utilizarlas en una experiencia real.',
		imgs: [git, vite, npm, eslint],
	},
	4: {
		title: 'Scrum',
		desc: 'He leído mucho sobre metodologías ágiles y dada mi experiencia en el deporte son formas de organizar equipos que me resultan familiares (precisamente SCRUM viene del Rugby).',
		imgs: [scrum],
	},
};

export default data;
