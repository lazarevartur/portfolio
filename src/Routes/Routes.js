import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AboutUs, OurWork, Contact } from '../pages'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={ AboutUs }/>
        <Route path='/ourWork' component={ OurWork }/>
        <Route path='/contact' component={ Contact }/>
      </Switch>

    </>
  )
}

export default Routes
