import { lazy, Suspense } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import useObserver from './hooks/useObserver';

// Al usar Lazy con conditional render, reducimos la carga incial de 5,2MB a 3,7MB
const About = lazy(() => import('./components/About/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
	// Traemos los observadores de cada section y su referencia
	const { ref: skillsRef, isIntersecting: isSkillsIntersecting } =
		useObserver();
	const { ref: aboutRef, isIntersecting: isAboutIntersecting } = useObserver();
	const { ref: projectsRef, isIntersecting: isProjectsIntersecting } =
		useObserver();
	const { ref: contactRef, isIntersecting: isContactIntersecting } =
		useObserver();

	return (
		<div className='App'>
			<NavBar />
			<main>
				<Header />
				<section ref={aboutRef} id='about'>
					{isAboutIntersecting && (
						<Suspense fallback={null}>
							<About />
						</Suspense>
					)}
				</section>
				<section ref={skillsRef} id='skills'>
					{isSkillsIntersecting && (
						<Suspense fallback={null}>
							<Skills />
						</Suspense>
					)}
				</section>
				<section ref={projectsRef} id='projects'>
					{isProjectsIntersecting && (
						<Suspense fallback={null}>
							<Projects />
						</Suspense>
					)}
				</section>
				<section ref={contactRef} id='contact'>
					{isContactIntersecting && (
						<Suspense fallback={null}>
							<Contact />
						</Suspense>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
