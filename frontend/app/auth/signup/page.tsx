'use client'

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../../layouts/AuthLayout";

const Signup = () => {

    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    // const [password, setPassword] = useState<string>('');
    // const [confirmPassword, setConfirmPassword] = useState<string>('');

    const submitLogin = () => {

        axios.post('http://localhost:3001/signup', {
            email: email,
        }).then((res) => {
            // redirect to home page
            router.push('/auth/login');
        }).catch(err => {
            alert('Invalid email or password');
        })
    }

    return (
        <AuthLayout>
            <div className="flex justify-center items-center h-full">
                <div className="w-96 h-96 rounded-3xl flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-semibold text-white pb-8">Sign Up</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="w-3/4 h-12 bg-transparent border border-orange-500 rounded-xl px-4 text-white outline-none mb-4" />
                    {/* <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-3/4 h-12 bg-transparent border border-orange-500 rounded-xl px-4 text-white outline-none mb-4" />
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" className="w-3/4 h-12 bg-transparent border border-orange-500 rounded-xl px-4 text-white outline-none mb-4" /> */}
                    <button onClick={submitLogin} className="w-3/4 h-12 bg-orange-500 rounded-xl text-white">Sign Up</button>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Signup;