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
import { Departments } from './components/Subfiles/Departments/Departments';
import Servicedetail1 from "./components/Subfiles/Service-detail/service-detail1/Servicedetail1"
import Servicedetail2 from "./components/Subfiles/Service-detail/service-detail2/Servicedetail2"
import Servicedetail3 from "./components/Subfiles/Service-detail/service-detail3/Servicedetail3"
import Servicedetail4 from "./components/Subfiles/Service-detail/service-detail4/Servicedetail4"

import DepartmentsDetail1 from "./components/Subfiles/Departments/departments-detail1/DepartmentsDetail1"
import DepartmentsDetail2 from "./components/Subfiles/Departments/departments-detail2/DepartmentsDetail2"
import DepartmentsDetail3 from "./components/Subfiles/Departments/departments-detail3/DepartmentsDetail3"
import DepartmentsDetail4 from "./components/Subfiles/Departments/departments-detail4/DepartmentsDetail4"
import { useState } from 'react';
import NewsDetail from './pages/News/NewsDetail';
const App = () => {
  const [language, setLanguage] = useState('uz');
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Navbar language={language} setLanguage={setLanguage}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/service-detail1" component={Servicedetail1} />
          <Route exact path="/service-detail2" component={Servicedetail2} />
          <Route exact path="/service-detail3" component={Servicedetail3} />
          <Route exact path="/service-detail4" component={Servicedetail4} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/department-detail1" component={DepartmentsDetail1} />
          <Route exact path="/department-detail2" component={DepartmentsDetail2} />
          <Route exact path="/department-detail3" component={DepartmentsDetail3} />
          <Route exact path="/department-detail4" component={DepartmentsDetail4} />
          <Route path="/news" exact>
            <News language={language} />
          </Route>
          <Route path="/news/:id">
            <NewsDetail language={language} />
          </Route>
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/partners" component={Partners} />
          <Route path="/docs" component={Docs} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
