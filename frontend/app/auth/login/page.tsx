'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import AuthLayout from '../../layouts/AuthLayout';

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>('');

    const sendOTP = () => {
        axios.post('http://localhost:3001/send-otp', {
            email: email,
        }).then((res) => {
            if (res.status === 200) setOtpSent(true);
        }).catch(err => {
            alert('Invalid email or password');
        })
    }

    const verifyOTP = () => {
        axios.post('http://localhost:3001/verify-otp', {
            email: email,
            otp: otp,
        }).then((res) => {
            // redirect to home page
            router.push('/');
        }).catch(err => {
            alert('Invalid OTP');
        })
    }

    return (
        <AuthLayout>
            <div className="flex justify-center items-center h-full">
                <div className="w-96 h-96 rounded-3xl flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-semibold text-white pb-8">Login</h1>
                    {!otpSent ? (<>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" value={email} className="w-3/4 h-12 bg-transparent border border-orange-500 rounded-xl px-4 text-white outline-none mb-4" />
                        <button onClick={sendOTP} className="w-3/4 h-12 bg-orange-500 rounded-xl text-white">Send OTP</button>
                    </>
                    ) : (<>
                        <input onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter OTP" value={otp} className="w-3/4 h-12 bg-transparent border border-orange-500 rounded-xl px-4 text-white outline-none mb-4" />
                        <button onClick={verifyOTP} className="w-3/4 h-12 bg-orange-500 rounded-xl text-white">Verify OTP</button>
                    </>
                    )
                    }
                </div>
            </div>
        </AuthLayout>
    );
}

export default Login;