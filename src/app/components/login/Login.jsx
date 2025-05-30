import React from 'react'
import SocialLogin from '@/app/components/SocialLogin';
import { signIn, signOut } from "next-auth/react"

export default function Login() {

  return (
    <div>
      <form>
        <h2 className='font-bold text-xl text-center'>Sign in</h2>
        <label className="label">Email</label><br />
          <input type="email" name='email' className="input w-full" placeholder="Email" /><br />
          <label className="label mt-3">Password</label><br />
          <input type="password" name='passwrod' className="input w-full mb-2" placeholder="Password" /><br />
          <button onClick={() => signIn()}
          className="btn bg-[#FF6A1A] shadow-none text-white w-full mt-4">Sign In</button>
      </form>
      <SocialLogin />
      <div className='my-3'>
        <p className='text-center'>Don't have an account? <span className='text-[#FF6A1A] font-medium'>Sign Up</span></p>
      </div>
    </div>
  )
}
