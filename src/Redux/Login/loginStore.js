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
            let data = action.payload
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
                window.location.href = "/home";
            }
        },
    }
})

export const getDataUserLogin = (userName, userPassword) => async (dispatch) => {
    console.log(api.headers);
    try {
        const res = await axios({
            method: 'POST',
            url: api.url + "/api/login",
            headers: api.headers,
            responseType: 'json',
            data: {
                user: userName,
                password: userPassword,
            }
        })
        console.log(res)
        dispatch(setInfoDataUserLogin(res.data.data))


    } catch (error) {
        console.log(error)
        /*  dispatch({
             type: EROR,
             payload: res.data.data
         }) */
    }
}


export const { setInfoDataUserLogin } = getInfo.actions;
export const selectUserDataLogin = (state) => state.userDataLoginStore.userDataLogin;
export default getInfo.reducer;
