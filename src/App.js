import Header from "./components/Header"
import Input from "./components/Input"
import Output from "./components/Output"

const App = () =>{
  return(
    <div>
      <Header title="Weather today" description="What the weather like today?"/>
      <Input/>
      <Output/>
    </div>
  )
}

export default App