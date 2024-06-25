import ForecastUnit from "./ForecastUnjit";
import { useTranslation } from "react-i18next";

const Forecast =({list})=>{
    const { t } = useTranslation()
    
    const days = list.reduce((total, current)=> [...total, current.day],[])
    const daySet =Array.from(new Set(days))

    return (
        <div className="forecast-wrapper">
            <h3>{t("forecast")}:</h3>
            <div className="forecasts-container">
                {daySet.map((item)=>{
                    return(
                        <div key={item} className="forecast-unit-container">
                            <h4 className="forecast-week-day">{item}</h4>
                            <ForecastUnit day={item} list={list}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Forecast