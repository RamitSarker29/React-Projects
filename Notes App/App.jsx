import { useState } from 'react'


const App = () => {

  const formhandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({title , details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const deleteNotes = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx , 1)
    setTask(copyTask)
  }


  return (
    <div className='min-h-screen lg:flex bg-black text-white'>
      <form  onSubmit={formhandler}className='flex flex-col gap-5 lg:w-1/2 items-start p-10'>
          <h1 className='text-3xl font-bold'>Add Notes</h1>
          <input className='px-5 py-2 border-2 rounded w-full font-medium' type="text" placeholder='Enter Notes Heading' value={title} onChange={(e) => {
            setTitle(e.target.value)

          }} />
          <textarea className='px-5 py-2 border-2 rounded h-32 w-full font-medium' type="text" placeholder='Write Details' value={details} onChange={(e) => {
            setDetails(e.target.value)
          }} />
          <button className='bg-white w-full text-black active:scale-95 px-5 py-2 border-2 rounded font-medium'>Add Note</button>
      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
      <div className='flex items-start justify-start flex-wrap gap-5 mt-5 overflow-auto scrollbar-none'>
        {task.map(function (elem , idx) {
          return <div key= {idx} className='flex justify-between flex-col items-start relative h-52 w-40 bg-cover py-6 pb-4 px-4 rounded-2xl text-black bg-[url("https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg")] p-5 text-wrap'>
            <div>
              <h3 className='font-bold text-xl leading-tight'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={() =>{
              deleteNotes(idx)
            }} className='bg-red-500 cursor-pointer active:scale-95 text-white w-full py-1 text-xs rounded font-bold'>Delete</button>

          </div>

        })}


      </div>

        
      </div>
    </div>
  )
}

export default App
