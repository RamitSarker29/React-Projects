import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)
  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserData(response.data)  
    console.log(response.data)
  }

  useEffect(function() {
    getData()
  } , [index])

  let printUserData = <h3 className='text-gray-300 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem , idx) {
      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-50 rounded-xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
        <h2 className='font-bold text-center'>{elem.author}</h2>
        </a>

      </div>
    })
  }
  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      <div className='flex flex-wrap gap-3 h-[90%]'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        {index > 1 && (
        <button onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }}
        } className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold text-black'>Prev</button>)}
        <h3 className='font-semibold text-xl'>Page {index}</h3>
        <button onClick={() => {
          setIndex(index + 1)
          setUserData([])
        }}
         className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold text-black'>Next</button>
      </div>
    </div>

  )
}

export default App
