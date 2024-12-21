import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import './App.css'
// import authService from "./appwrite/auth"
// import { login, logout } from "./store/authSlice"
// import { Footer, Header } from './components'
// import { Outlet } from 'react-router-dom'

// function App() {
//   const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     authService.getCurrentUser()
//     .then((userData) => {
//       if (userData) {
//         dispatch(login({ userData }))
//       } else {
//         dispatch(logout())
//       }
//     })
//     .finally(() => setLoading(false))
//   }, [])

//   return !loading ? (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Header */}
//       <Header />

//       <main className="px-4 py-8">
//         {/* Main content area */}
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   ) : (
//     // Loading spinner or full screen loading state
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <div className="text-white">Loading...</div>
//     </div>
//   )
// }

// export default App

