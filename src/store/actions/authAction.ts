import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

interface loginInputData {
  email : string;
  password : string;
}
interface returnData{
  token ?: string | null | undefined;
  err?: string | null | undefined;
}
// type error ={
//   err ?: string | null | undefined
// }

// type returnValue = mainState | error

export const loginAction = createAsyncThunk<returnData , loginInputData>(
  'auth/login',
  async (data) => {
    console.log('data',data);
    const response = await axios.post('https://reqres.in/api/login',{
      "email":data.email,
      "password":data.password
      } , {
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
}
    )
    console.log("🚀 ~ file: authAction.ts:27 ~ response:", response)
    return response.data;
    
    // console.log("🚀 ~ file: authAction.ts:26 ~ response:", response)
    // try{
    //   const Data = await response.data;
    //   console.log("🚀 ~ file: authAction.ts:30 ~ response:", response)
    //   return Data;
    // }catch(err) {
    //   console.log("🚀 ~ file: authAction.ts:33 ~ err:", err)
    //   return err;
    // }


//     {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }

  })