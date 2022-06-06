import { Header } from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SoftSkills from './components/SoftSkills/SoftSkills';

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<About />
				<SoftSkills />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
