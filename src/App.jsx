import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import SocialList from './components/SocialList/SocialList';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<main>
				<Header />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<SocialList />
			</main>
		</div>
	);
}

export default App;
