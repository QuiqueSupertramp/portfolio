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
	frontend: {
		desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vel debitis molestiae tenetur. Rerum provident laudantium nostrum tempore dicta porro',
		imgs: [html, css, js, react, vue],
	},
	backend: {
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia a reprehenderit facere qui similique, quam reiciendis vitae laborum magni ut hic repellat animi inventore',
		imgs: [node, express, mongoDB],
	},
	tools: {
		desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vel debitis molestiae tenetur. Rerum provident laudantium nostrum tempore dicta porro',
		imgs: [git, vite, npm, eslint],
	},
	scrum: {
		desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vel debitis molestiae tenetur. Rerum provident laudantium nostrum tempore dicta porro',
		imgs: [scrum],
	},
};

export default data;
