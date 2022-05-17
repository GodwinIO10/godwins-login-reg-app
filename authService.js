// strictly for making http request and sending the data back and setting any data in local storage

import axios from 'axios'

const API_URL = "http://localhost:4000/api/user/login"

// Register user
const login = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

// Logout User

const logout = () => {
    localStorage.removeItem("user")
}


const authService = {
    login, 
    logout,
}

export default authService