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
		desc: 'Todo App creada con Vue y Vue-Router para el frontend, con Node y Express para el backend y MongoDB para la base de datos. Tiene login de ususario y es completamente responsive',
		technologies: ['Vue', 'Vue-Router', 'Node & Express', 'MongoDB'],
	},
	landingPage: {
		title: 'Landing Page',
		images: [
			{ img: landingReactDesktop, class: 'project__img project__img--desktop' },
			{ img: landingReactTablet, class: 'project__img project__img--tablet' },
			{ img: landingReactMobile, class: 'project__img project__img--mobile' },
		],
		desc: 'Todo App creada con Vue y Vue-Router para el frontend, con Node y Express para el backend y MongoDB para la base de datos. Tiene login de ususario y es completamente responsive',
		technologies: ['React', 'CSS Modules', 'Context API'],
	},
};

export default data;
