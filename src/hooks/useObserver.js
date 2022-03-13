import { useState, useEffect, useRef } from 'react';

function useObserver(rootMargin = '0px 0px -100px 0px') {
	const [isIntersecting, setIntersecting] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry], observer) => {
				if (entry.isIntersecting) {
					setIntersecting(true);
					observer.unobserve(ref.current);
				}
			},
			{
				rootMargin,
			}
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			observer.unobserve(ref.current);
		};
	}, []);
	return { ref, isIntersecting };
}

export default useObserver;
