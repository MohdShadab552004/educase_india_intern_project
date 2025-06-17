import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/home");
  };

  const fields = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      validation: { required: "Full name is required" }
    },
    {
      label: "Phone number",
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      validation: {
        required: "Phone number is required",
        pattern: {
          value: /^[0-9]{10}$/,
          message: "Enter a valid 10-digit number"
        }
      }
    },
    {
      label: "Email address",
      name: "email",
      type: "email",
      placeholder: "Email address",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email format"
        }
      }
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      validation: {
        required: "Password is required",
        minLength: {
          value: 6,
          message: "Password must be at least 6 characters"
        }
      }
    },
    {
      label: "Company name",
      name: "company",
      type: "text",
      placeholder: "Company name",
      validation: {}
    }
  ];

  return (
    <main className='max-w-[375px] min-h-screen mx-auto px-5 py-10 flex flex-col gap-7 bg-[var(--primary-bg-color)] text-[var(--primary-text-color)]'>
      <header className='pr-[100px]'>
        <h1 className='font-bold text-[28px] leading-none  mb-2.5'>
          Create your PopX account
        </h1>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between gap-4 flex-1'>

        <section>
          {fields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              register={register}
              error={errors[field.name]}
            />
          ))}

          {/* Radio Buttons */}
          <fieldset className='mb-4'>
            <legend className='mb-2'>Are you an Agency?</legend>
            <div className='flex gap-4'>
              <label className='flex items-center gap-[12px]'>
                <input
                  type='radio'
                  value='yes'
                  {...register('isAgency', { required: "Please select an option" })}
                  className="accent-[var(--primary-button-color)] w-[22px] h-[22px]"
                />
                Yes
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  value='no'
                  {...register('isAgency')}
                  className="accent-[var(--primary-button-color)] w-[22px] h-[22px]"
                />
                No
              </label>
            </div>
            {errors.isAgency && <p className='text-red-500 text-sm mt-1'>{errors.isAgency.message}</p>}
          </fieldset>
        </section>
       
        <button
          type='submit'
          className='w-full h-[46px] bg-[var(--primary-button-color)] text-white text-lg rounded-lg'
        >
          Create Account
        </button>
      </form>
    </main>
  );
};

export default SignupPage;
