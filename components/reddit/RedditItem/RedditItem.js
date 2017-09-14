import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem } from '../../../actions/redditActions';
import styles from './RedditItem.scss';

class RedditItem extends React.Component {
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
      <div className={styles.RedditItem}>
        <h3>{ this.props.children }</h3>
        <p>Author: {this.props.author}</p>
        <button
          id={this.props.id}
          onClick={this.handleDelete}
        >
          X
        </button>
      </div>
    );
  }
}

RedditItem.propTypes = {
  author: PropTypes.string,
  children: PropTypes.string,
  dispatch: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

RedditItem.defaultProps = {
  redditData: [],
  author: 'Default',
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolorem architecto eos, esse facere quo omnis expedita, impedit officiis! Quisquam officiis recusandae expedita numquam vel in molestias qui placeat esse.'
};

export default connect()(RedditItem);
