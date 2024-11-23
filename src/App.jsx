import { Routes, Route } from 'react-router-dom'
import { Home, Form } from './components'

export const App = () => {
   return (
      <section id="app">
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/form" element={<Form />}></Route>
         </Routes>
      </section>
   )
}
