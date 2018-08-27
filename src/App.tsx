import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import routes from './routes'

export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        {routes.map((route: any, i: number) => (
          <Route exact={true} path={route.path} key={i} render={props => (
            <route.component {...props} />
          )} />
        ))}
      </div>
    </BrowserRouter>
  )
}

