import React from "react";

const City = ({ city }) => {
  if (!city) return <div className="text-white">Hava durumunu öğrenmek için bir şehir ismi gir!</div>;

  return (
    <div className="city h-4/5 box-border text-center">
      <div className="weather h-full w-full flex flex-col justify-center items-center text-white">
        <img className="icon" src={city.data.current.condition.icon} alt="" />
        <h1 className="region">
          {city.data.location.region} - {city.data.location.country}
        </h1>
        <h1 className="temp">{city.data.current.temp_c}°</h1>
        <h1 className="text">{city.data.current.condition.text}</h1>

        <div className="degerler">
          <h1 className="wind">Rüzgar <span>{city.data.current.wind_kph}</span></h1>
          <h1 className="precip">Yağış <span>{city.data.current.precip_mm} mm</span></h1>
          <h1 className="pressure">Basınç <span> {city.data.current.pressure_mb} mb</span></h1>
        </div>
      </div>
    </div>
  );
};

export default City;
