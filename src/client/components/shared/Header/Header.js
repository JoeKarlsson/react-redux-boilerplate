import React from 'react';
import {
	NavLink,
} from 'react-router-dom';
import './Header.scss';

const activeStyles = {
	color: 'red',
};

const Header = () => {
	return (
		<div className="header_bar">
			<header>
				<NavLink className="header_logo" to="/">Home</NavLink>
				<ul className="header_nav" role="navigation">
					<li><NavLink to="/about" activeStyle={activeStyles}>About</NavLink></li>
				</ul>
			</header>
		</div>
	);
};

export default Header;
