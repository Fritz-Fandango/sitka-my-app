import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Container, Segment } from 'semantic-ui-react';
import Navbar from './components/Navbar';

import QueuePage from './pages/QueuePage';
import UploadPage from './pages/UploadPage';

function App() {
  return (
    <BrowserRouter>
      <Container>
          <Segment>
            <Navbar/>
          </Segment>
          <Switch>
            <Route path='/' component={UploadPage} exact />
            <Route path="/queue" component={QueuePage} exact/>
          </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;