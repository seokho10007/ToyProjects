import { useEffect } from 'react';

const Rew = () => {
	const onScroll = () => {
		console.log(window.screenY);
	};
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);
	return <div style={{ height: '3000px' }}>asdasd</div>;
};

export default Rew;
