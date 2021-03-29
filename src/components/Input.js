import {useState} from "react"
import {Input} from "antd"
import "antd/dist/antd.css"
const IInput = (props) =>{
    const [stateValue, setValue] = useState({
        value: ""
    })
    const { Search } = Input;
    const HandaleChange = (e) =>{
        let text = e.target.value
        setValue({...stateValue,
            value: text
        })
        props.setApp({...props.stateApp,
            value: text
        })
        props.setAPI({...props.stateAPI,
            name: "",
            errorMessage: ""
        })
    }
    const HandaleSubmit = () =>{
        setValue({...stateValue,
            value: ""
        })
        props.getWeatherToday()
    }
    return(
            <div>
                <Search type="text" value={stateValue.value} onChange={HandaleChange} placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large" onSearch={HandaleSubmit}/>
            </div>
    )
}

export default IInput