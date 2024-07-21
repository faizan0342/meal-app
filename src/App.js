import logo from './logo.svg';
import './App.css';
import Drawer from "./component/Drawer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./component/Home";
import Menu from './component/Menu';
import Catg1 from "./component/category/Catg1"
import Catg2 from "./component/category/Catg2"
import Catg3 from "./component/category/Catg3"
import Catg4 from "./component/category/Catg4"
import Catg5 from "./component/category/Catg5"
import Catg6 from "./component/category/Catg6"
import Catg7 from "./component/category/Catg7"
import Catg8 from "./component/category/Catg8"
import Catg9 from "./component/category/Catg9"
import RandomMeals from "./component/RandomMeals"
import Favorites from "./component/Favorites"

function App() {
  return (
    <div className='container'>
      <header><Drawer /></header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/menu" component={Menu} />
            <Route  path="/Catg1" component={Catg1} />
            <Route  path="/Catg2" component={Catg2} />
            <Route  path="/Catg3" component={Catg3} />
            <Route  path="/Catg4" component={Catg4} />
            <Route  path="/Catg5" component={Catg5} />
            <Route  path="/Catg6" component={Catg6} />
            <Route  path="/Catg7" component={Catg7} />
            <Route  path="/Catg8" component={Catg8} />
            <Route  path="/Catg9" component={Catg9} />
            <Route  path="/randomMeals" component={RandomMeals} />
            <Route  path="/favorites" component={Favorites} />
            
          </Switch>
        </Router>
      </main>
      <footer className='footer'>Footer</footer>
    </div>
  );
}

export default App;
