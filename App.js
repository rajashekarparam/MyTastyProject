import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {connect} from 'react-redux'

import HOC from './HOC'

import HomePage from './Home/HomePage'
import DashboardPage from "./DashBaord/DashboardPage"
import CartPage from "./Cart/CartPage"
import NotFoundPage from './NotFound/NotFoundPage'


import './App.css'

function App({playerOne,playerTwo}) {

  const name="John"


  return (
    <div className="App">
      <p>Name: {playerOne.name} | {' '} Score: {playerOne.score}</p>
      <p>Name: {playerTwo.name} | {' '} Score: {playerTwo.score}</p>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/dashboardpage" element={<DashboardPage />} />
          <Route exact path="/cartpage" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

const mapStateToProps=state=>({
  playerOne: state.PlayerOne,
  playerTwo: state.PlayerTwo

})

export default connect(mapStateToProps)(App)
// export default HOC(App)


