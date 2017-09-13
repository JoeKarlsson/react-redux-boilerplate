import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import styles from './PrimaryLayout.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/static/About';
import RedditPage from './components/reddit/RedditPage';
import NoMatch from './components/static/NoMatch';

class PrimaryLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={ RedditPage } />
            <Route path="/about" component={ About } />
            <Route component={ NoMatch } />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default PrimaryLayout;
