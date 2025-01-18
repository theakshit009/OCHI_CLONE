import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let delX = mouseX - window.innerHeight / 2;
      let delY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(delY, delX) * (180 / Math.PI);
      setRotate(angle - 180);
    })
  })
  
  

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className='relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] '>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full ">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full ">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 ">
                <div className="w-7 h-7 bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full ">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full ">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 ">
                <div className="w-7 h-7 bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes