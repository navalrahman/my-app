import React from 'react'
import { Link,Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Films from './components/Films'
import TvShows from './components/TvShows'
import Sports from './components/Sports'
import Avengers from './components/Avengers'
import Details from './components/Details'

const App = (props) => {
  return (
    <div>
      <h2>React Routing</h2>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/fims">Films</Link></li>
        <li><Link to="/tv-shows">TvShows</Link></li>
        <li><Link to="/sports">Sports</Link></li>
      </ul>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/films" element={<Films/>}  />
      <Route path="/tv-shows/*" element={<TvShows/>} />
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/tv-shows/:name" element={<Avengers/>}  />
      <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App