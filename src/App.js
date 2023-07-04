import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Partners from './pages/Partners/Partners';
import Contact from './pages/Contacts/Contact';
import Docs from './pages/Docs/Docs';
import Default from './pages/Default/Default';

const App = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/partners" component={Partners} />
          <Route path="/docs" component={Docs} />
          <Route path="*" component={Default} />
        </Switch>
        <Footer />
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
