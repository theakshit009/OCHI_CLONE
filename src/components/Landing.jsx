import React from 'react'

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-52 px-5">
        {["We Create", "eye opening", "presentations"].map((item,index) => {
            return (
              <div className="masker font-['Founders Grotesk X-Cond SmBd']">
                <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-medium">
                  {item}
                </h1>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Landing