import moment from "moment";
import { weatherType } from "../weatherType";

const ForecastUnit =({day, list})=>{

    const newList = list.filter((item)=>day===item.day)

    return(
        <div className="week-day-container">
            {newList.map((item)=>{
                const icon = weatherType[item.weather[0].main].icon
                return (
                    <div key={item.dt} className="hour-temp">
                        <p className="unit-icon">{icon}</p>
                        <p className="unit-time">{moment(item.dt_txt).format("HH:mm")}</p>
                        <p>{parseInt(item.main.temp)}°C</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ForecastUnit