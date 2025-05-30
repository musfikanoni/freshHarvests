import React from 'react'

export default function Register() {
  return (
    <div>
        <form>
            <label className="label">Name</label><br />
            <input type="email" name='name' className="input w-full" placeholder="Name" /><br />
            <label className="label">Email</label><br />
            <input type="email" name='email' className="input w-full" placeholder="Email" /><br />
            <label className="label mt-3">Password</label><br />
            <input type="password" name='passwrod' className="input w-full mb-2" placeholder="Password" /><br />
            <button
            className="btn bg-[#FF6A1A] shadow-none text-white w-full mt-4">Register</button>
        </form>
        <div className='my-3'>
            <p className='text-center'>Already have an account? <span className='text-[#FF6A1A] font-medium'>Sign in</span></p>
        </div>
    </div>
  )
}
