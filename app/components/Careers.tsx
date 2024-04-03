import React from 'react'

const Careers = () => {
  return (
    <div className="bg-gray-200 h-72 w-full p-20 flex justify-center flex-col">
      <h1 className="text-black text-3xl font-semibold flex justify-center">
        Careers
      </h1>
      <p className="text-black text-xl flex justify-center">
        View our global openings and apply today to join the team.
      </p>

      <div className="flex justify-center items-center pt-6">
        <button
          className="bg-orange-500  text-white hover:bg-white-500  border-2 w-[200px] border-orange-500 hover:bg-white hover:text-orange-500 font-bold py-3 px-4 rounded-xl ml-4"
          type="button"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default Careers