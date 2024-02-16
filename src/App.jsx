import { Routes, Route } from 'react-router-dom'
import { Home, SignedUp } from './components'

export const App = () => {
   return (
      <section id="app">
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signedUp" element={<SignedUp />}></Route>
         </Routes>
      </section>
   )
}
