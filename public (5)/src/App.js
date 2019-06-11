import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Books from './Books';
import BookDetails from './BookDetails';
import BookSearch from './BookSearch';
import NewBook from './NewBook';
import ChangeBook from './ChangeBook';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"></link>
        <Switch>
          <Dashboard>
            <Switch>
              <Route path="/books" component={Books} />
              <Route path="/book/new" component={NewBook} />
              <Route path="/book/search" component={BookSearch} />
              <Route path="/book/:isbn" component={BookDetails} />
              <Route path="/changebook/:isbn" component={ChangeBook} />
            </Switch>
          </Dashboard>
        </Switch>
      </Router>
    );
  }
}
