import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
const api_key = import.meta.env.VITE_SOME_KEY

const page = 'https://studies.cs.helsinki.fi/restcountries/api/name/';
const allCountriesURL = 'https://studies.cs.helsinki.fi/restcountries/api/all';
const weatherAPI = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=`;

function App() {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState(null);
  const [datos, setDatos] = useState(null);
  const [paises, setPaises] = useState([]);
  const [weather, setWeather] = useState(null);  
  const [weatherError, setWeatherError] = useState(null); 

  useEffect(() => {
    axios
      .get(allCountriesURL)
      .then((response) => {
        setPaises(response.data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
        setPaises([]);
      });
  }, []);

  useEffect(() => {
    if (countries) {
      const coincidencias = paises.filter((pais) =>
        pais.name.common.toLowerCase().includes(countries.toLowerCase())
      );

      if (coincidencias.length === 0) {
        setDatos('No hay coincidencias');
      } else if (coincidencias.length > 10) {
        setDatos('Demasiadas coincidencias, por favor sea más específico');
      } else if (coincidencias.length > 1) {
        setDatos(coincidencias.map((pais) => pais.name.common));
      } else {
        axios
        .get(`${page}${coincidencias[0].name.common}`)
        .then((response) => {
          setDatos(response.data);
          const capital = response.data.capital[0];

          // Realizar la petición a la API de clima usando la capital del país
          axios.get(`${weatherAPI}${capital}&aqi=no`)
            .then((weatherResponse) => {
              setWeather(weatherResponse.data);
              setWeatherError(null); // Limpiar cualquier error previo
              console.log('Weather data:', weatherResponse.data); // Registrar la respuesta de la API
            })
            .catch((error) => {
              console.error('Error fetching weather:', error);
              setWeatherError('Error fetching weather data');
              setWeather(null); // Limpiar cualquier dato previo en caso de error
            });
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
          setDatos(error.message);
        });
       
      }
    }
  }, [countries, paises]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    setCountries(value);
  };

  return (
    <>
      <header className="App-header">
        <h1>Countries</h1>
      </header>
      <main>
        <div>
          <form onSubmit={onSearch}>
            country: <input value={value} onChange={handleChange} />
            <button type="submit">Buscar</button>
          </form>
          <pre>
            {Array.isArray(datos) ? (
              datos.map((d, index) => <p key={index}>{d}</p>)
            ) : typeof datos === 'string' ? (
              <p>{datos}</p>
            ) : datos ? (
              <div>
                <h2>{datos.name.common} ({datos.name.official})</h2>
                <img src={datos.flags.png} alt={`Flag of ${datos.name.common}`} />
                <p><strong>Capital:</strong> {datos.capital && datos.capital.join(', ')}</p>
                <p><strong>Population:</strong> {datos.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {datos.region}</p>
                <p><strong>Subregion:</strong> {datos.subregion}</p>
                <p><strong>Languages:</strong> {Object.values(datos.languages).join(', ')}</p>
                <p><strong>Currency:</strong> {datos.currencies && Object.values(datos.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')}</p>
                <p><strong>Timezone:</strong> {datos.timezones.join(', ')}</p>
                <p><strong>Area:</strong> {datos.area.toLocaleString()} km²</p>

                {/* Mostrar la información del clima */}
                {weather && weather.location && weather.current && (
                  <div>
                    <h3>Weather in {weather.location.name}</h3>
                    <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
                    <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
                    <p><strong>Condition:</strong> {weather.current.condition.text}</p>
                    <p><strong>Wind:</strong> {weather.current.wind_kph} kph ({weather.current.wind_dir})</p>
                    <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
                    <p><strong>Feels like:</strong> {weather.current.feelslike_c}°C</p>
                    <p><strong>Local Time:</strong> {weather.location.localtime}</p>
                  </div>
                )}
              </div>
            ) : null}
          </pre>
        </div>
      </main>
    </>
  );
}

export default App;

