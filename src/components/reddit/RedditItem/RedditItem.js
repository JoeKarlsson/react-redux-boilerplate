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
	children: PropTypes.string,
	dispatch: PropTypes.func.isRequired,
};

RedditItem.defaultProps = {
	children: '',
};

export default connect(null, null)(RedditItem);
