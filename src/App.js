import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ListPost from './ListPost'
import DetailPost from './DetailPost'

export class App extends Component {
   render() {
      return (
         <div className='container'>
         <Router>
            <Route path='/' exact component={ListPost} />
            <Route path='/detail/:idpost' component={DetailPost} />

         </Router>
         </div>
      )
   }
}

export default App
