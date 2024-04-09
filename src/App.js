// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import TopRatedPage from './TopRatedPage';
import UpcomingPage from './UpcomingPage';
import SingleMoviePage from './SingleMoviePage';
import SearchedMoviePage from './SearchedMoviePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/top-rated" component={TopRatedPage} />
          <Route path="/upcoming" component={UpcomingPage} />
          <Route path="/movie/:id" component={SingleMoviePage} />
          <Route path="/search/:query" component={SearchedMoviePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
