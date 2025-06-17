import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/home");
    }
  }, [navigate]);

  const onSubmit = (data) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/home");
  };

  const fields = [
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "Enter email address",
      validation: {
        required: 'Email is required',
        pattern: {
          value: /^\S+@\S+$/i,
          message: 'Invalid email format'
        }
      }
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
      validation: {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Password must be at least 6 characters'
        }
      }
    }
  ];

  return (
    <main className='max-w-[375px] h-screen mx-auto px-5 py-10 flex flex-col items-start gap-8 bg-[var(--primary-bg-color)] text-[var(--primary-text-color)]'>
      <header>
        <h1 className='text-[28px] font-bold mb-2 leading-tight'>Sign in to your PopX account</h1>
        <p className='opacity-60 leading-snug'>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
        {fields.map((field) => (
          <InputField
            key={field.name}
            {...field}
            register={register}
            error={errors[field.name]}
          />
        ))}

        <button
            type="submit"
            className='w-full h-[46px] bg-[#CBCBCB] rounded-lg text-white text-[17px] cursor-pointer hover:bg-[#cbcbcbc5] transition-colors duration-[200ms] ease-in-out'
            >
            Login
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
