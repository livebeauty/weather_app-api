import React, { useEffect, useState } from 'react'
import "./styles.css"
import axios from 'axios';
import WeatherInput from './components/WeatherInput';
import Card from './components/Card';




const App = () => {


  const [weatherGet, setWeatherGet] = useState([]);
  const [city, setCity] = useState("delhi");
  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(false)
  
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=757ea2765f85dd51a0d48bc54aa1f396&units=metric`

  const weatherData = async(city) => {
    setLoading(true)
    try {
      const res = await axios.get(api)
      console.log(res.data);
      setWeatherGet(res.data);
      setLoading(false)
    } catch (error) {
      setError(error);
      setLoading(false)
    }
  }

  useEffect(() => {
  weatherData(city)
  }, [])
  
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
     weatherData(city);
  };



  return (
    <>
    <div className="w-full h-[100vh] bg-[url('./img/ab.avif')] object-cover relative ">
     <h1 className='flex items-center justify-center text-5xl text-white font-semibold mb-10'>Weather Report</h1>
      <WeatherInput InputChange={handleInputChange} FormSubmit={handleFormSubmit}/>
      <Card weather={weatherGet} loading={Loading}/>
    </div>
    </>
  )
}

export default App

