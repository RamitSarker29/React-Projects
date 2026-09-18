import React from 'react'

const rightCardContent = (props) => {
  return (
    <div>
              <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-12 w-12 text-shadow-2xs flex justify-center items-center text-2xl font-semibold'>{props.id + 1}</h2>
            <div>
                <p className='text-lg leading-relaxed text-white mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum laboriosam ex consequuntur perspiciatis explicabo?</p>
                <div className='flex justify-between'>
                    <button style= {{backgroundColor : props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button style= {{backgroundColor : props.color}} className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default rightCardContent
