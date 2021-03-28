import {useState} from "react"
const Input = (props) =>{
    const [stateValue, setValue] = useState({
        value: ""
    })
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
    const HandaleSubmit = (e) =>{
        e.preventDefault()
        setValue({...stateValue,
            value: ""
        })
        props.getWeatherToday()
    }
    return(
        <form onSubmit={HandaleSubmit}>
            <div>
                <input type="text" value={stateValue.value} onChange={HandaleChange}/>
            </div>
            <div>
                <button>Discover</button>
            </div>
        </form>
    )
}

export default Input