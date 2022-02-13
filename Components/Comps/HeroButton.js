import React from 'react';
import { heroBtn } from '../../styles/Home.module.css';

export default function HeroButton({ text }) {
	return (
		<>
			<button className={heroBtn}>{text}</button>
		</>
	);
}
