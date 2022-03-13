import Title from '../Title/Title';
import './Projects.css';

import todoVueDesktop from '../../images/projects/todoVue.png';
import todoVueTablet from '../../images/projects/todoVue-tb.png';
import todoVueMobile from '../../images/projects/todoVue-mb.png';

import landingReactDesktop from '../../images/projects/landing.png';
import landingReactTablet from '../../images/projects/landing-tb.png';
import landingReactMobile from '../../images/projects/landing-mb.png';

const Projects = () => {
	return (
		<div className='projects' id='projects'>
			<Title text='Projects' number='3' />
			<div className='projects__main'>
				<div className='project'>
					<div className='project__images'>
						<img
							src={todoVueDesktop}
							alt=''
							className='project__img project__img--desktop'
						/>
						<img
							src={todoVueTablet}
							alt=''
							className='project__img project__img--tablet'
						/>
						<img
							src={todoVueMobile}
							alt=''
							className='project__img project__img--mobile'
						/>
					</div>
					<div className='project__description'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloremque minima aspernatur vel voluptatum, beatae repudiandae
							tempore quis unde eaque dignissimos. Illo qui ab magnam cupiditate
							possimus ipsam quos sapiente ut error. A at eius dignissimos
							maiores quod aperiam quis, ad culpa incidunt natus sint distinctio
							ipsam, cupiditate tenetur numquam deleniti!
						</p>
					</div>
					<div className='project__footer'>
						<div className='project__technologies'>
							<h4>Vue</h4>
							<h4>Vue-Router</h4>
							<h4>Node</h4>
							<h4>MongoDB</h4>
							<h4>Express</h4>
						</div>
						<div className='project__links'></div>
					</div>
				</div>
				<div className='project'>
					<div className='project__images'>
						<img
							src={landingReactDesktop}
							alt=''
							className='project__img project__img--desktop'
						/>
						<img
							src={landingReactTablet}
							alt=''
							className='project__img project__img--tablet'
						/>
						<img
							src={landingReactMobile}
							alt=''
							className='project__img project__img--mobile'
						/>
					</div>
					<div className='project__description'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloremque minima aspernatur vel voluptatum, beatae repudiandae
							tempore quis unde eaque dignissimos. Illo qui ab magnam cupiditate
							possimus ipsam quos sapiente ut error. A at eius dignissimos
							maiores quod aperiam quis, ad culpa incidunt natus sint distinctio
							ipsam, cupiditate tenetur numquam deleniti!
						</p>
					</div>
					<div className='project__footer'>
						<div className='project__technologies'>
							<h4>React</h4>
							<h4>CSS modules</h4>
							<h4>Context</h4>
						</div>
						<div className='project__links'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
