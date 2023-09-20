// import { UserExistsResponse } from 'src/types/api/auth';

// export function withToastForError<Args>(
//   payloadCreator: (args: Args) => Promise<UserExistsResponse>,
// ) {
//   return async (args: Args, { rejectWithValue }: any) => {
//     try {
//       const response: UserExistsResponse = await payloadCreator(args);
//       if (response.status !== 200) {
//         return rejectWithValue(response.msg);
//       }
//       return response;
//     } catch (err: any) {
//       return rejectWithValue(err);
//     }
//   };
// }


// export function withToastForError(payloadCreator) {
//   return async (args, { rejectWithValue }) => {
//     try {
//       const response = await payloadCreator(args);
//       if (response.status !== 200) {
//         return rejectWithValue(response.msg);
//       }
//       return response;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   };
// }