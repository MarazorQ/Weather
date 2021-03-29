import Header from "./components/Header"
import IInput from "./components/Input"
import Output from "./components/Output"
import {useState} from "react"
import "antd/dist/antd.css"
import { message } from 'antd'

const API_KEY = "560fa248c2896982c86a30538e05c590"

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
    const KELVIN = 273.15
    return Math.round(kelvin - KELVIN)
  }
  const getWeatherToday = async (e) =>{
      let city = stateApp.value
      let date = new Date()

      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      const data = await api_url.json()
      
      console.log(data)
      data.message === "city not found" ? message.error("City not found"): setAPI({...stateAPI, errorMessage: undefined})
      if (city && data.message !== "city not found"){
          date.setTime(data.sys.sunset)
          let sunsetDate = date.getHours()

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
    <div className="app">
      <div className="app_main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <Header title="Weather today" description="What the weather like today?"/>
            </div>
            <div className="col-sm-7">
              <IInput getWeatherToday={getWeatherToday} setAPI={setAPI} stateAPI={stateAPI} setApp={setApp} stateApp={stateApp}/>
              <Output name={stateAPI.name} temp={stateAPI.temp} sunrise={stateAPI.sunrize} 
              sunset={stateAPI.sunset} countryCode={stateAPI.countryCode} timezone={stateAPI.timezone} weather={stateAPI.weather} stateAPI={stateAPI} 
              errorMessage={stateAPI.errorMessage}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App