const Output = (props) =>{
    return(
        <div>
            {props.name && 
                <div>
                    <p>Местоположение: {props.name}, {props.countryCode} </p>
                    <p>Температура: {props.temp}</p>
                    <p>Восход: {props.sunrise}</p>
                    <p>Заход: {props.sunset}</p>
                    <p>Пояс: {props.timezone}</p>
                    <p>Описание погоды: {props.weather}</p>
                </div>
            }
        </div>
    )
}

export default Output