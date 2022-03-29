import './Header.css';
import AvatarMenu from './components/AvatarMenu';
import Sidebar from './components/Sidebar';

export const Header = () => {
	return (
		<header className='header'>
			<Sidebar />
			<AvatarMenu />
		</header>
	);
};
