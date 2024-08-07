import React from 'react'
import LoginUsing from '../../Components/Login-Using/LoginUsing'
import LoginWithPhone from '../../Components/LoginWithPhone/LoginWithPhone'
import LoginOTPpage from '../../Components/LoginOTPpage/LoginOTPpage'

function LoginPage() {
  return (
    <div>
      <LoginUsing/>
      <LoginWithPhone/>
      <LoginOTPpage/>
    </div>
  )
}

export default LoginPage
