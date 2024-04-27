import AddBook from './pages/AddBooks'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import DeleteBooks from './pages/DeleteBooks'
import EditBooks from './pages/EditBooks'
import ShowBooks from './pages/ShowBooks'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/books/create' element={<AddBook />}></Route>
      <Route path='/books/detail/:id' element={<ShowBooks />}></Route>
      <Route path='/books/delete/:id' element={<DeleteBooks />}></Route>
      <Route path='/books/edit/:id' element={<EditBooks />}></Route>
    </Routes>


  )
}

export default App
