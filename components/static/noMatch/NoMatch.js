import React from 'react';
import styles from './NoMatch.scss';

class NoMatch extends React.Component {
  render() {
    return (
      <div className={styles.noMatch}>
        No Page Found
      </div>
    );
  }
}

export default NoMatch;
