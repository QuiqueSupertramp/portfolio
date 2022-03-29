import todoVueDesktop from '../../images/projects/todoVue.png';
import todoVueTablet from '../../images/projects/todoVue-tb.png';
import todoVueMobile from '../../images/projects/todoVue-mb.png';

import landingReactDesktop from '../../images/projects/landing.png';
import landingReactTablet from '../../images/projects/landing-tb.png';
import landingReactMobile from '../../images/projects/landing-mb.png';

const data = {
	todoApp: {
		title: 'Todo App',
		images: [
			{ img: todoVueDesktop, class: 'project__img project__img--desktop' },
			{ img: todoVueTablet, class: 'project__img project__img--tablet' },
			{ img: todoVueMobile, class: 'project__img project__img--mobile' },
		],
		desc: 'Aplicación fullstack responsive con login de usuario. Frontend desarrollado con Vue 3 y Vue-Router. Backend con Node y Express. Base de datos MongoDB.',
		links: {
			code: 'https://github.com/QuiqueSupertramp/todoList-Vue3',
			code2: 'https://github.com/QuiqueSupertramp/API-todoList-Node',
			web: 'https://todolistvue3.netlify.app/',
		},
	},
	landingPage: {
		title: 'Landing Page',
		images: [
			{ img: landingReactDesktop, class: 'project__img project__img--desktop' },
			{ img: landingReactTablet, class: 'project__img project__img--tablet' },
			{ img: landingReactMobile, class: 'project__img project__img--mobile' },
		],
		desc: 'Página de producto responsive, multilenguaje y con gestión de opiniones. Frontend desarrollado con React, CSS modules y Context API para el estado global.',
		links: {
			code: 'https://github.com/QuiqueSupertramp/landing-product-page-react',
			web: 'https://quiquesupertramp.github.io/landing-product-page-react/',
		},
	},
};

export default data;
