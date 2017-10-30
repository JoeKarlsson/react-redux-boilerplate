import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/redditActions';
import RedditList from '../RedditList/RedditList';
import ErrorBoundary from '../../shared/ErrorBoundary/ErrorBoundary';
import './RedditPage.scss';

export class RedditPage extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchPosts());
	}

	render() {
		return (
			<div className="RedditPage">
				<h1>Reddit</h1>
				<ErrorBoundary>
					<RedditList redditData={this.props.redditData} />
				</ErrorBoundary >
			</div>
		);
	}
}

RedditPage.propTypes = {
	dispatch: PropTypes.func.isRequired,
	redditData: PropTypes.arrayOf(PropTypes.object),
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
