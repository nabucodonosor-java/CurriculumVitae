import Footer from "components/Footer";
import Navbar from "components/Navbar";
import PageInConstruction from "components/PageInConstruction";
import AboutMe from "pages/AboutMe";
import Academic from "pages/Academic";
import Professional from "pages/Professional";
import Projects from "pages/Projects";
import { Router, Switch, Route } from "react-router-dom";
import history from "utils/history";

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <main className="routes-container">
      
      <section className="routes-switch-container">
        <Switch>
          <Route path="/" exact>
            <AboutMe />
          </Route>
          <Route path="/experiencia-profissional">
            <Professional />
          </Route>
          <Route path="/formacao-academica">
            <Academic />
          </Route>
          <Route path="/projetos">
            <Projects />
          </Route>
          <Route path="/ajuda">
            <PageInConstruction />
          </Route>
        </Switch>
      </section>
      <Footer />
    </main>
  </Router>
);

export default Routes;
