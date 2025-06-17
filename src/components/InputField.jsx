import React from "react";

const InputField = ({ label, name, type, placeholder, register, validation = {}, error }) => {
  const isRequired = validation?.required !== undefined;

  return (
    <div className='relative w-full mb-4'>
      <label
        htmlFor={name}
        className='absolute -top-2 left-3 px-1 text-sm z-10 bg-[var(--primary-bg-color)] text-[var(--primary-button-color)]'
      >
        {label}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`w-full h-[46px] px-4 pt-2 rounded-lg border ${
          error ? 'border-red-500' : 'border-zinc-300'
        } outline-none`}
      />

      {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
    </div>
  );
};

export default InputField;
