import React from 'react';
import {
	Link,
} from 'react-router-dom';
import styles from './Header.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<h1>React Reddit</h1>
			<ul role="navigation">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</div>
	);
};

export default Header;
