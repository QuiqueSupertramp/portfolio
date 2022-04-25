const todoVueDesktop = 'images/projects/todoVue.png';
const todoVueTablet = 'images/projects/todoVue-tb.png';
const todoVueMobile = 'images/projects/todoVue-mb.png';

const landingReactDesktop = 'images/projects/landing.png';
const landingReactTablet = 'images/projects/landing-tb.png';
const landingReactMobile = 'images/projects/landing-mb.png';

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
		desc: 'Página de producto multilenguaje y con gestión de opiniones (Context API). Frontend desarrollado con React y CSS modules',
		links: {
			code: 'https://github.com/QuiqueSupertramp/landing-product-page-react',
			web: 'https://quiquesupertramp.github.io/landing-product-page-react/',
		},
	},
};

export default data;
