import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import "moment/locale/ru"
import "moment/locale/fr"
const KEY = process.env.REACT_APP_WEATHER_KEY

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async({lang})=>{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=55.751244&lon=37.618423&appid=${KEY}&units=metric&lang=${lang}`)
    return {respons:response.data, lang:lang}
})

const initialState = {
    allInfo:{},
    status:"idle",
    lang:"en"
}

const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchWeather.fulfilled, (state, action)=>{
            state.allInfo = action.payload.respons
            state.lang = action.payload.lang
            const loadedInfo = action.payload.respons.list.map((item)=>{
                return {...item, day: moment(item.dt_txt).locale(action.payload.lang).format("dddd")}
            })
            state.allInfo.list = loadedInfo
            state.status = "success"
        })
        .addCase(fetchWeather.pending, (state)=>{
            state.status= "loading"
        })
        .addCase(fetchWeather.rejected, (state)=>{
            state.status = "failed"
        })
    }
})

export const weatherInfo =(state)=> state.weather.allInfo
export const fetchStatus =(state)=> state.weather.status
export const language = (state) => state.weather.lang

export default weatherSlice.reducer