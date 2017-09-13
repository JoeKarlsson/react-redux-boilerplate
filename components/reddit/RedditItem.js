'use strict';

import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { removeItem } from '../../actions/redditActions';

class RedditItem extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  };

  handleDelete(e) {
    const id = e.target.id;
    const { dispatch, index } = this.props;
    dispatch(removeItem(index));
  };

  render() {
    return (
      <div className='redditItem'>
        <h3>{ this.props.children }</h3>
        <p>Author: {this.props.author}</p>
        <button
          id={this.props.id}
          onClick={this.handleDelete} >
          X
        </button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return { }
};

export default connect(
  mapStateToProps
)(RedditItem);
