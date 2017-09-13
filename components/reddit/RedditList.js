'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import RedditItem from './RedditItem';

class RedditList extends React.Component {
  render() {
    var redditListNode = this.props.redditData.map(function(redditDataItem, index){
      return (
        <RedditItem
          id={redditDataItem.data.id}
          index={index}
          author={redditDataItem.data.author}
          key={redditDataItem.data.id} >
          {redditDataItem.data.title}
        </RedditItem>
      )
    })
    return (
      <div className='redditList'>
        <h2>Reddit List</h2>
        { redditListNode }
      </div>
    )
  }
};

export default RedditList;
