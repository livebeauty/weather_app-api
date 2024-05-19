import React from 'react'

const WeatherInput = ({InputChange,FormSubmit}) => {
  return (
    <div className=''>
      <form className='flex gap-8 justify-center items-center' onSubmit={FormSubmit}>
        <input type="text" className="w-1/2 px-5 py-3 rounded-md" 
        placeholder='Enter your city...'
        onChange={InputChange}
        />
        <button className='px-5 py-3 bg-yellow-300 hover:bg-yellow-500 rounded-xl font-semibold text-white  hover:text-black transition-all' >GET WEATHER</button>
      </form>
    </div>
  )
}

export default WeatherInput