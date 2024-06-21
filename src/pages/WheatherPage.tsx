import { useState } from "react";
import axios from "axios";
import WheatherResults from "../components/WheatherResults";

const WheatherPage = () => {
    const [city, setCity] = useState("");

    const [results, setResults] = useState({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""
    });

    const [loading, setLoading]=useState(false);

    const getWeather = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            setLoading(true);
            axios.get(`https://api.weatherapi.com/v1/current.json?key=2ebcc35a9afd4db0b59234123241504&q=${city}&aqi=no`)
            .then(res => {
              setResults({
                country: res.data.location.country,
                cityName: res.data.location.name,
                temperature: res.data.current.temp_c,
                conditionText: res.data.current.condition.text,
                icon: res.data.current.condition.icon
              })
              setCity("");
              setLoading(false);
            })
        }catch(err){
            alert("エラー");
        }
    }
    return (
        <div className="max-height">
            <h1>Wheather</h1>
            <form onSubmit={getWeather}>
                <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city}/>
                <button type="submit">Get Weather</button>
            </form>
            {
                loading ? <div className="loading"></div> : 
                <WheatherResults 
                    country={results.country}
                    cityName={results.cityName} 
                    temperature={results.temperature}
                    conditionText={results.conditionText}
                    icon={results.icon}
                />
            }
        </div>
    )
}
export default WheatherPage;