import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVedio from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { render } from 'react-dom';

const Login = () => {
  return (
    <div className='flex flex-col items-center h-screen'>

      <div className='realtive w-full h-full'>
        <video
          src={shareVedio}
          type="vedio/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'></div>
          <img src={logo} width="130px" alt="logo" />
          <div className='shadow-2xl'>

            <GoogleLogin
              clientId=''
              render={(renderProps) => (
                <button
                  type="button"
                  className='bg-mainColor flex justify-center items-center p-3 m-3 rounded-lg cursor-pointer outline-none'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy
                >
                 <FcGoogle className='mr-4'/> sign in with google
                </button>
              )}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login