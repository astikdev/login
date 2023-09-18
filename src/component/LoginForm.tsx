// src/components/LoginForm.tsx
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../store/store';
import {loginAction} from '../store/actions/authAction';
// import {useDispatch} from 'react-redux';
// import {login} from '../features/auth/authThunks';

interface LoginFormProps {
  // onSuccess: () => void;
}



const LoginForm: React.FC<LoginFormProps> = (

  ) => {

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state=>state.auth.isLoading)
  const isError = useAppSelector(state=>state.auth.isError)
  const token = useAppSelector(state=>state.auth.token)

  // const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // console.log('handleLogin', username, password);
    dispatch(loginAction({
      email: username,
      password: password})
      );
    
    // dispatch(login({username, password}))
    //   .unwrap()
    //   .then(() => {
    //     onSuccess();
    //   });
  };

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button onClick={handleLogin}>{isLoading ? '...Loding' : 'Login'}</button>
      {token && (<div className='success'>
        token: {token}
      </div>)

      }
      {isError && (<div className='error'>
        {isError}
      </div>)}
    </div>
  );
};

export default LoginForm;