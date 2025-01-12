import React from 'react'
import "../index.css"

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-[21vh] px-5">
        {["We Create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex ">
                {index === 1 && (
                  <div className="w-[7.5vw] min-h-[4.8vw] overflow-hidden relative top-[.5vw] rounded-xl">
                    <img
                      className="h-[5.5vw]"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </div>
                )}
                <h1 className="font-['Myb'] uppercase text-[8vw] leading-[5.5vw]  font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
        <div className="border-t-[1px] border-zinc-700 mt-[26vh] flex justify-between items-center py-3">
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