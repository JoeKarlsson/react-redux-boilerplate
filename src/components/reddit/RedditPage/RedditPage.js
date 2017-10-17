import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/redditActions';
import RedditList from '../RedditList/RedditList';
import styles from './RedditPage.scss';

export class RedditPage extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchPosts());
	}

	render() {
		return (
			<div className={styles.RedditPage}>
				<h1>Reddit</h1>
				<RedditList redditData={this.props.redditData} />
			</div>
		);
	}
}

RedditPage.propTypes = {
	dispatch: PropTypes.func.isRequired,
	redditData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

RedditPage.defaultProps = {
	redditData: [],
};

const mapStateToProps = (state) => {
	return {
		redditData: state.redditItemReducer.toJS(),
	};
};

export default connect(
	mapStateToProps,
	null,
)(RedditPage);
