'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import AuthLayout from '../../layouts/AuthLayout';

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const submitLogin = () => {
        axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        }).then((res) => {
            // redirect to home page
            router.push('/');
        })
    }

    return (
        <AuthLayout>
            <div className="flex justify-center items-center h-full">
                <div className="w-96 h-96 rounded-3xl flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-semibold text-white pb-8">Login</h1>
                    <input type="text" placeholder="Email" className="w-3/4 h-12 bg-transparent border border-orange-500 rounded-xl px-4 text-white outline-none mb-4" />
                    <input type="password" placeholder="Password" className="w-3/4 h-12 bg-transparent border border-orange-500 rounded-xl px-4 text-white outline-none mb-4" />
                    <button onClick={submitLogin} className="w-3/4 h-12 bg-orange-500 rounded-xl text-white">Login</button>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Login;