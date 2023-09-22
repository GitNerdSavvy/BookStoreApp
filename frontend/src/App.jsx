import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Routes/Home'
import Create from './Routes/Create'
import Update from './Routes/Update'
import Books from './Routes/Books'
import Delete from './Routes/Delete'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/book/create' element={<Create/>}> </Route>
      <Route path='/book/update/:id' element={<Update/>}> </Route>
      <Route path='/book/details/:id' element={<Books/>}> </Route>
      <Route path='/book/delete/:id' element={<Delete/>}> </Route>
    </Routes>
  )
}

export default App
