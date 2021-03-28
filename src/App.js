import Header from "./components/Header"
import Input from "./components/Input"
import Output from "./components/Output"
import {useState} from "react"

const API_KEY = "560fa248c2896982c86a30538e05c590"
const KELVIN = 273.15

const App = () =>{
  const [stateApp, setApp] = useState({
      value: ""
  })
  const [stateAPI, setAPI] = useState({
      name: undefined,
      temp: undefined,
      sunrize: undefined,
      sunset: undefined,
      weather: undefined,
      countryCode: undefined,
      timezone: undefined,
      errorMessage: undefined
  })
  const weatherConverter = (kelvin) =>{
    return Math.round(kelvin - KELVIN)
  }
  const getWeatherToday = async (e) =>{
      let city = stateApp.value
      let date = new Date()

      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      const data = await api_url.json()
      
      console.log(data)
      data.message === "city not found" ? setAPI({...stateAPI, errorMessage: data.message}): setAPI({...stateAPI, errorMessage: undefined})
      if (city && data.message !== "city not found"){
          date.setTime(data.sys.sunset)
          let sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

          date.setTime(data.sys.sunrise)
          let sunrizeDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
          
          let tempValue = weatherConverter(data.main.temp)
          setAPI({...stateAPI,
            name: data.name,
            temp: tempValue,
            sunrize: sunrizeDate,
            sunset: sunsetDate,
            countryCode: data.sys.country,
            timezone: data.timezone,
            weather: data.weather[0].description,
            errorMessage: undefined
          })

      }
  }
  return(
    <div>
      <Header title="Weather today" description="What the weather like today?"/>
      <Input getWeatherToday={getWeatherToday} setAPI={setAPI} stateAPI={stateAPI} setApp={setApp} stateApp={stateApp}/>
      <Output name={stateAPI.name} temp={stateAPI.temp} sunrise={stateAPI.sunrize} 
      sunset={stateAPI.sunset} countryCode={stateAPI.countryCode} timezone={stateAPI.timezone} weather={stateAPI.weather} stateAPI={stateAPI} 
      errorMessage={stateAPI.errorMessage}/>
    </div>
  )
}

export default App