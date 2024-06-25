import WeatherPage from "./components/WeatherPage";
import { useSelector } from "react-redux";
import { fetchStatus } from "./slices/weatherSlice";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {

  const status = useSelector(fetchStatus)

  const content = status==="success"?<WeatherPage/>: <h1>Loading...</h1>

  return (
    <div className="page-container">
      <nav>
        <h4>Weather App</h4>
        <LanguageSwitcher/>
        </nav>
        <div className="content-container">
          {content}
        </div>
    </div>
  );
}

export default App;
