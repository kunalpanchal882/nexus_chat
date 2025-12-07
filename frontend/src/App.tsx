import React from 'react'
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

const App = () => {
  return (
    <div className='w-full h-full '>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        {/* <Route path='/signup' element={<SignupPage/>}/> */}
      </Routes>
    </div>
  )
}

export default App