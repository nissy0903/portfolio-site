type WheatherProps = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}

const WheatherResults = ({country, cityName, temperature, conditionText, icon} : WheatherProps) => {
    return (
        <div>
            {country && <div className="results-country">{country}</div>}
            {cityName && <div className="results-city">{cityName}</div>}
            {temperature && <div className="results-temp">{temperature}<span>℃</span></div>}
            {conditionText && 
                <div className="results-condition">
                    <img src={icon} alt="icon"/>
                    <span>{conditionText}</span>
                </div>
            }
        </div>
    );
};

export default WheatherResults;