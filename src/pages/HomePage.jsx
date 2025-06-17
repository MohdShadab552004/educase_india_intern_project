import React from "react";

const HomePage = () => {
  return (
    <section className="max-w-[375px] min-h-[100dvh] mx-auto bg-[var(--primary-bg-color)] shadow">
        <header className="w-full h-[68px] bg-[#FFFFFF] flex items-center px-[15px]">
            <h2 className="text-[18px] font-semibold">Account Settings</h2>
        </header>

      <div className="flex items-start gap-4 px-[15px] py-[30px]">
        <div className="relative ">
          <img
            src="/images/profile.png"
            alt="Marry Doe"
            className="w-[75px] h-[75px] rounded-full object-fill"
          />
          <span className="absolute bottom-0 right-0 w-[21px] h-[23px] rounded-full">
            <img src="/images/edit-icon.png" alt="Edit" className="w-full h-full object-cover" />
          </span>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold text-gray-900">Marry Doe</div>
          <div className="text-sm text-gray-500 mb-2">Marry@gmail.com</div>
        </div>
      </div>

      <section className="px-[15px] pb-[30px] border-b-[1px] border-dotted border-zinc-300">
        <p className="text-sm text-[var(--primary-text-color)] w-full">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
      </section>
    </section>
  );
};

export default HomePage;
