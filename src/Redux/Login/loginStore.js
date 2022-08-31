import API from "../ApiSettings/url"
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = API();

export const getInfo = createSlice({
    name: 'userDataLoginStore',
    initialState: {
        userDataLogin: JSON.parse(localStorage.getItem('userDataLogin')) || null,
    },

    reducers: {
        setInfoDataUserLogin: (state, action) => {
            let data = action.payload.data
            state.userDataLogin = {}
            state.userDataLogin = {
                cedula: data.id,
                firstName: data.FirstName,
                lastName: data.LastName,
                mail: data.mail,
            }

            localStorage.setItem('userDataLogin', JSON.stringify({
                firstName: data.FirstName,
                lastName: data.LastName,
                mail: data.mail,
            }))

            if (state.userDataLogin != null) {
                action.payload.history("/home")
            }
        },
    }
})

export const getDataUserLogin = (history, userName, userPassword) => async (dispatch) => {

    axios.post(api.url + "/api/login", {
        user: userName,
        password: userPassword,
    })
        .then(res => {
            let data = {
                data: res.data,
                history: history
            }
            dispatch(setInfoDataUserLogin(data))
        })
        .catch(error => {
            console.log('There was an error!', error);
        });

    /* try {
       
         const responce = await fetch(api.url + "/api/login", {
            method: "POST",
            body: JSON.stringify({
                user: userName,
                password: userPassword,
            })
        })
        const data = await responce.json() 
        dispatch(setInfoDataUserLogin(res.data.data))
        
        console.log(res);
    } catch (error) {
        console.log(error)
    } */
}


export const { setInfoDataUserLogin } = getInfo.actions;
export const selectUserDataLogin = (state) => state.userDataLoginStore.userDataLogin;
export default getInfo.reducer;
