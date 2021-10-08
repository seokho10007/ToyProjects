import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	src: string;
	name: string;
}
const LinkBox = ({ src, name }: Props) => (
	<>
		<div>
			<Link to={src}>{name}</Link>
		</div>
	</>
);

export default LinkBox;
