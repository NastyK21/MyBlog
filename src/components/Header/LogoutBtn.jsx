import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
// import React from 'react'
// import { useDispatch } from 'react-redux'
// import authService from '../../appwrite/auth'
// import { logout } from '../../store/authSlice'

// function LogoutBtn() {
//   const dispatch = useDispatch()

//   const logoutHandler = () => {
//     authService.logout().then(() => {
//       dispatch(logout())
//     })
//   }

//   return (
//     <button
//       className='px-6 py-2 text-lg font-medium rounded-full bg-red-600 text-white duration-200 hover:bg-red-700'
//       onClick={logoutHandler}
//     >
//       Logout
//     </button>
//   )
// }

// export default LogoutBtn
