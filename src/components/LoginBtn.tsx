"use client"

import { signIn } from "next-auth/react"

export function LoginBtn(){
    return(
        <button 
        onClick={() => signIn ("google", {callbackUrl:"/dashboard"})}
        className="flex gap-2 items-center border border-neutral-900 p-2 rounded-md">
            Login com Google
        </button>
    )
}