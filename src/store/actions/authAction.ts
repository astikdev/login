import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

interface loginInputData {
  email : string;
  password : string;
}
interface mainState{
  token ?: string | null | undefined;
}
// type error ={
//   err ?: string | null | undefined
// }

// type returnValue = mainState | error

export const loginAction = createAsyncThunk<mainState , loginInputData>(
  'auth/login',
  async (data) => {
    console.log('data',data);
    const response = await axios.post('https://reqres.in/api/login',{
      "email":data.email,
      "password":data.password
      }
    )
    return response.data;
    // console.log("🚀 ~ file: authAction.ts:26 ~ response:", response)
    // try{
    //   const token = await response.data.token;
    //   return token;
    // }catch(err) {
    //   return err;
    // }


//     {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }

  })