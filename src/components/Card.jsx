import React from 'react'

const Card = ({weather,loading}) => {
   console.log(weather);
  
   if(!weather || !weather.weather || weather.weather.length === 0){
     return <div>Loading...</div>
   }


   const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <>
       {loading ? <h1>Loading...</h1> :  
       <div className='w-4/6 h-4/6 absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-[0_10px_20px_rgba(0,_171,_202,_0.7)]'>

<div className='w-full h-full flex '>
  <div className='w-1/2'>
    <div className='w-full h-2/3 '>
      <img src={iconUrl} alt="" 
      className='w-full h-full object-cover rounded-md'/>
    </div>
    <div className='w-full h-1/3 flex items-center justify-center'>
      <h3 className='text-3xl font-semibold'>{weather.name}, {weather.sys.country}</h3>
    </div>
  </div>
  <div className='w-1/2'>
  <div className='w-full h-[45%] relative'>

  <div className='flex items-center justify-evenly gap-5  absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>
  <h3 className='text-4xl font-semibold'>Temperature</h3>
  <p className='text-4xl font-semibold'>{weather.main.temp}℃</p>
  </div>
   
  <p className='text-2xl font-semibold  absolute bottom-[0%] left-1/2 -translate-x-1/2  -translate-y-1/2'> {weather.weather[0].description}</p>
  </div>

  <div className='w-full h-[55%]  flex flex-row'>
   <div className='w-full h-full flex flex-col gap-5 items-center justify-center'>
   <h3 className='text-2xl font-semibold'>Wind</h3>
   <p className='text-3xl font-semibold'>{weather.wind.speed}Km/h</p>
   </div>
   <div className='w-full h-full  flex flex-col gap-5 items-center justify-center'>
   <h3 className='text-2xl font-semibold'>Humidity</h3>
   <p className='text-3xl font-semibold'>{weather.main.humidity}%</p>
   </div>
   <div className='w-full h-full flex flex-col gap-5 items-center justify-center'>
   <h3 className='text-2xl font-semibold'>Pressure</h3>
   <p className='text-3xl font-semibold'>{weather.main.pressure}mb</p>
   </div>
  </div>
   
    </div>
   </div>
  </div>
     }
    </>

   
  )
}

export default Card