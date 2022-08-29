import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FabllbackProvider } from './composables/FabllbackProvider';
import { ModalProvider } from './composables/ModalProvider';
import 'nprogress/nprogress.css';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <FabllbackProvider>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
          </Switch>
        </FabllbackProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
