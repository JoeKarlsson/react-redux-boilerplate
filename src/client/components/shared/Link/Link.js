import React from 'react';
import PropTypes from 'prop-types';

const STATUS = {
	HOVERED: 'hovered',
	NORMAL: 'normal',
};

class Link extends React.Component {

	constructor(props) {
		super(props);

		this._onMouseEnter = this._onMouseEnter.bind(this);
		this._onMouseLeave = this._onMouseLeave.bind(this);

		this.state = {
			class: STATUS.NORMAL,
		};
	}

	_onMouseEnter() {
		this.setState({ class: STATUS.HOVERED });
	}

	_onMouseLeave() {
		this.setState({ class: STATUS.NORMAL });
	}

	render() {
		return (
			<a
				className={this.state.class}
				href={this.props.page || '#'}
				onMouseEnter={this._onMouseEnter}
				onMouseLeave={this._onMouseLeave}
			>
				{this.props.children}
			</a>
		);
	}
}

Link.propTypes = {
	children: PropTypes.string,
	page: PropTypes.string,
};

Link.defaultProps = {
	children: '',
	page: '',
};

export default Link;
