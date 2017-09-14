import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styles from './Header.scss';


class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>React Reddit</h1>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header;
