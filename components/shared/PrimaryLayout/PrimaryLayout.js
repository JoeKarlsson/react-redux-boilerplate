import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../../static/about/About';
import NoMatch from '../../static/noMatch/NoMatch';
import RedditPage from '../../reddit/RedditPage/RedditPage';
import styles from './PrimaryLayout.scss';

export class PrimaryLayout extends React.Component {
  render() {
    return (
      <div className={styles.PrimaryLayout}>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={RedditPage} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PrimaryLayout;
