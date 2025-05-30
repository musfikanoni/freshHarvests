import { signIn } from 'next-auth/react'
import React from 'react'

export default function SocialLogin() {
    const handleSocialLogin = async (providerName) => {
        // console.log("solal", providerName);
        const result = await signIn(providerName, {redirect: false});
        console.log(result);
    }
  return (
    <div>
    <div className=" flex justify-center gap-3 my-5">
        <button onClick={() => handleSocialLogin("google")} className='btn'>
            <img className='h-7 w-7' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />
            <p>Google</p>
        </button>
        <button onClick={() => handleSocialLogin("facebook")} className='btn'>
            <img className='h-7 w-7' src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" />
            <p>Facebook</p>
        </button>
    </div>
    </div>
  )
}
