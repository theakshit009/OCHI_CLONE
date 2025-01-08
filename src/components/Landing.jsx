import React from 'react'

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-52 px-5">
        {["We Create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker font-['Founders Grotesk X-Cond SmBd']">
              <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-medium">
                {item}
              </h1>
            </div>
          );
        })}
        <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-1">
          {[
            "For public and private Comapanies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          ))}
          <div className='px-5 text-sm py-2 border-[2px] font-light border-zinc-500 rounded-full'>START THE PROJECT</div>
        </div>
      </div>
    </div>
  );
}

export default Landing