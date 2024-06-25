import GeneralInfo from "./GeneralInfo"
import Forecast from "./Forecast"
import { useSelector} from "react-redux"
import { weatherInfo } from "../slices/weatherSlice"
import moment from "moment"
import "moment/locale/ru"
import "moment/locale/fr"
import { language } from "../slices/weatherSlice"

const WeatherPage = ()=>{

    const info = useSelector(weatherInfo)
    const lang = useSelector(language)

    const date = moment().locale(lang).format("dddd D MMMM")
    const currentInfo = info.list[0]

    return (
        <div className="weather-wrapper">
            <div className="weather-container">
                <div className="location">
                    <h1>{info.city.name}, {info.city.country}</h1>
                    <h3 className="weather-location-date">{date}</h3>
                </div>
                <GeneralInfo currentInfo={currentInfo} sunrise={info.city.sunrise} sunset={info.city.sunset}/>
                <Forecast list={info.list}/>
            </div>
        </div>
    )
}

export default WeatherPage