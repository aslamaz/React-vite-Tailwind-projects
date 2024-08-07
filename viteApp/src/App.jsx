import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor] = useState('olive');

// one method is this using function
//const changeColor = (color) =>{
// setColor(color)
// }

  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black'
          onClick={()=>setColor('black')}
          >dark mode
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-500'
          onClick={()=>setColor('red')}
          >red mode
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-500'
          onClick={()=>setColor('green')}
          >red mode
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
