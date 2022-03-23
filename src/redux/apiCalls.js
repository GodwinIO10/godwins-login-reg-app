import { updateError, updateStart, updateSuccess } from './userSlice'
import axios from 'axios'


export const updateUser = async (user, dispatch) => {
    dispatch(updateStart())
    try{
        const res = await axios.post("http://localhost:4000/api/user/:id/update")
        dispatch(updateSuccess(res.data))

    } catch (err){
        dispatch(updateError())
    }
}