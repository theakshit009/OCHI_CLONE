import React from 'react'

function About() {
  return (
    <div className="w-full py-20 bg-[#CDEA68] px-5 rounded-tl-3xl rounded-tr-3xl text-black  p-20 ">
      <h1 className="w-full text-[4vw] leading-[4vw] text-tighter m-0">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="border-t-[1px] border-[#a1b562] w-full mt-20 flex justify-between ">
        <div className="w-1/2 mt-5 ">
          <h1 className='text-5xl '>Our Approach: </h1>
          <button className="flex gap-10 items-center px-5 py-3 justify-between mt-10 uppercase bg-zinc-900 rounded-full text-white">
            Read More 
            <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
          </button>
        </div>
        <div className='w-1/2 h-[62vh] mt-5 rounded-xl overflow-hidden'>
          <img className='object-fill w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div> 
      </div>
    </div>
  );
}

export default About