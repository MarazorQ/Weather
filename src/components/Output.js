const Output = (props) =>{
    return(
        <div>
            {props.name && 
                <div>
                    <p>Местоположение: {props.name}, {props.countryCode} </p>
                    <p>Температура: {props.temp}  &deg;C</p>
                    <p>Восход: {props.sunrise}</p>
                    <p>Заход: {props.sunset}</p>
                    <p>Пояс: {props.timezone}</p>
                    <p>Описание погоды: {props.weather}</p>
                </div>
            }
            <div>
                {props.errorMessage}
            </div>
        </div>
    )
}

export default Output