import React from 'react'

function Featured() {
  return (
    <div className='w-full py-32  '>
        <div className='w-full px-5 border-b-[1px] border-zinc-700 pb-[3rem] '>
            <h1 className='text-5xl font-["Neue_Montreal"] tracking-tight '>Featured Projects</h1>
        </div>
        <div className='px-5 py-10'>
            <div className='cards w-full flex gap-5 mt-10 '>
                <div className='cardcontainer w-1/2 h-[70vh]  '>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cove' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                    </div>
                </div>
                <div className='cardcontainer w-1/2 h-[70vh]  '>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cove' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured