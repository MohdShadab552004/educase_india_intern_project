import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) {
            navigate("/home");
        }
    }, [navigate]);
    return (
        <section className='max-w-[375px] min-h-[100dvh]  mx-auto px-5 py-10 flex flex-col items-start justify-end gap-[29px] bg-[var(--primary-bg-color)] text-[var(--primary-text-color)]'>
            <header className='w-full'>
                <h1 className='font-bold text-[28px] leading-none mb-[10px]'>Welcome to PopX</h1>
                <p className=' opacity-[0.6]'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
            </header>
            <main className='w-full flex flex-col gap-[10px]'>
                <Link to="/signup" className='w-full h-[46px] flex justify-center items-center bg-[var(--primary-button-color)] rounded-lg text-[#FFFFFF] text-[17px]'>Create Account</Link>
                <Link to="login" className='w-full h-[46px] flex justify-center items-center bg-[var(--secondary-button-color)] rounded-lg text-[17px]'>Already Registered? Login</Link>
            </main>
        </section>
    )
}

export default LandingPage