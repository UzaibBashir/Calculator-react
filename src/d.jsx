
import './App.css'

function App() {

  return (
    <div className='bg-blue-200 flex items-center justify-center'>
      <div>
        <div className='bg-black'>
          <p className='text-amber-300'>screen</p>
        </div>
        <div className='bg-black-500 grid grid-cols-4'>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>1</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>2</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>3</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>+</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>4</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>5</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>6</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>-</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>7</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>8</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>9</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>*</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>0</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>C</button>
          <button className='bg-red-600 p-10 rounded-2xl m-4 border-4 border-red-700'>=</button>
          <button className='bg-red-500 p-10 rounded-2xl m-4 border-4 border-red-600'>/</button>
        </div>

      </div>

    </div>
  )
}

export default App
