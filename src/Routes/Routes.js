import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AboutUs, OurWork, Contact, MovieDetail } from '../pages'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={ AboutUs }/>
        <Route path='/ourWork' exact component={ OurWork }/>
        <Route path='/ourWork/:id' component={ MovieDetail }/>
        <Route path='/contact' component={ Contact }/>
      </Switch>
    </>
  )
}

export default Routes
