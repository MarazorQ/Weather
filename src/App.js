import Header from "./components/Header"
import Input from "./components/Input"
import Output from "./components/Output"
import {useState} from "react"

const API_KEY = "560fa248c2896982c86a30538e05c590"

const App = () =>{
  const [stateApp, setApp] = useState({
    value: ""
  })
  const getWeatherToday = async (e) =>{
      e.preventDefault()
      let city = stateApp.value
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      const data = await api_url.json()
      console.log(data)
  }
  return(
    <div>
      <Header title="Weather today" description="What the weather like today?"/>
      <Input getWeatherToday={getWeatherToday} setApp={setApp} stateApp={stateApp}/>
      <Output/>
    </div>
  )
}

export default App