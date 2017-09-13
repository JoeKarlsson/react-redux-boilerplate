'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/redditActions';
import RedditList from './RedditList';

class RedditPage extends React.Component {
  constructor() {
    super();
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  };

  render() {
    return (
      <div>
        <h1>Reddit</h1>
        <RedditList redditData={this.props.redditData} />
      </div>
    )
  }
};

RedditPage.propTypes = {
  redditData: PropTypes.array.isRequired,
};

RedditPage.defaultProps = {
  redditData: [],
};

const mapStateToProps = (state, ownProps) => {
  return {
    redditData: state.redditItemReducer.toJS(),
  }
};

export default connect(
  mapStateToProps
)(RedditPage);
