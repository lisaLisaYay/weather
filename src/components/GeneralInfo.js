import moment from "moment";
import { weatherType } from "../weatherType";
import { useTranslation } from "react-i18next";



const GeneralInfo =({currentInfo, sunrise, sunset})=>{

    const { t } = useTranslation()
    const {main, weather} = currentInfo
    const rise = moment(sunrise*1000).format("HH:mm")
    const set = moment(sunset*1000).format("HH:mm")

    const icon = weatherType[weather[0].main].icon

    return(
        <div className="general-info-wrap">
            <div className="general-info">
                <div className="current-weather">
                    <div className="general-info-icon">{icon}</div>
                    <div>
                        <p className="general-temp">{parseInt(main.temp)}°C</p>
                        <p className="general-case">{weather[0].description}</p>
                    </div>
                </div>
                <div className="day-info">
                    <div className="day-info-unit">
                        <p>{t("high")}: {parseInt(main.temp_max)}°C</p>
                        <p>{t("low")}: {parseInt(main.temp_min)}°C</p>
                    </div>
                    <div  className="day-info-unit">
                        <p>{t("humidity")}: {main.humidity}%</p>
                        <p>{t("pressue")}: {main.pressure}</p>
                    </div>
                    <div  className="day-info-unit">
                        <p>{t("sunrise")}: {rise}</p>
                        <p>{t("sunset")}: {set}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralInfo