import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import AsteroidsResult from "./AsteroidsResult";
import {homeUrl, asteroidsUrl} from "./constants";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="POST" method="">
          <div className="form-group startDateRow">
            <label htmlFor="startDateInput">Date de début</label>
            <input id="startDateInput" className="form-control" type="date" name="startDateInput"/>
          </div>

          <div className="form-group endDateRow">
            <label htmlFor="endDateInput">Date de fin</label>
            <input id="endDateInput" className="form-control" type="date" name="endDateInput"/>
          </div>

          <button id="submit-button" className="btn btn-info" type="submit">Chercher</button>
        </form>

        <Router className="row">
          {/*Il faut aller des url les plus spécifiques aux plus générales, car le switch s'arrête dès le premier résultat correspondant en lisant l'url de gauche à droite.*/}
          <Switch>
            <Route exacte path={asteroidsUrl} component={AsteroidsResult} />
            {/*<Route exacte path={homeUrl} component={App} />*/}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
