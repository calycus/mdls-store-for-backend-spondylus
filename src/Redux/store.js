import { configureStore } from '@reduxjs/toolkit'

//UserData Login
import userDataLoginStore from './Login/loginStore'


export default configureStore({
  reducer: {
    //UserData Login
    userDataLogin: userDataLoginStore,
    
  },
})