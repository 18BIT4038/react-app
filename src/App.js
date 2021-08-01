import React,{createContext,useState} from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Individual from './Individual';

export const store = createContext();

const App = () => {
  const [auth,setAuth] = useState(false);
  return (
    <div>
      <store.Provider value={[auth,setAuth]}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' component={Home} />
          <Route exact path='/indv/:name' component={Individual} />
        </Switch>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App
