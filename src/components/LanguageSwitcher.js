import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux"
import { fetchWeather } from "../slices/weatherSlice"

const LanguageSwitcher =()=>{

    const {i18n} = useTranslation()
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        const lang = e.target.value
        dispatch(fetchWeather({lang:lang}))
        i18n.changeLanguage(lang)
    }

    return(
        <select value={i18n.language} onChange={handleChange}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ru">Русский</option>
        </select>
    )
}

export default LanguageSwitcher