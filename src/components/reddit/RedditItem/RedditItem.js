import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem } from '../../../actions/redditActions';
import './RedditItem.scss';

export class RedditItem extends React.Component {
	constructor() {
		super();
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		const { dispatch, index } = this.props;
		dispatch(removeItem(index));
	}

	render() {
		return (
			<div className="RedditItem">
				<h3>{ this.props.children }</h3>
				<p>Author: {this.props.author}</p>
				<button
					onClick={this.handleDelete}
				>
          X
				</button>
			</div>
		);
	}
}

RedditItem.propTypes = {
	author: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
	children: PropTypes.string,
};

RedditItem.defaultProps = {
	redditData: [],
	author: 'Default',
	children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolorem architecto eos, esse facere quo omnis expedita, impedit officiis! Quisquam officiis recusandae expedita numquam vel in molestias qui placeat esse.',
};

export default connect(null, null)(RedditItem);
