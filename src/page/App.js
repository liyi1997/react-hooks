import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import home from './Home/home'
import user from './User/user'
import store from '../store/index'
const routers = [
  {
    path: '/',
    component: home
  },
  {
    path: '/user',
    component: user
  }
]
function App() {
  return (
    <Provider store={store}>
      <Router>
        {routers.map((router, index) => {
          return (
            <Route
              exact
              key={index}
              path={router.path}
              render={router.component}
            />
          )
        })}
      </Router>
    </Provider>
  )
}

export default App
