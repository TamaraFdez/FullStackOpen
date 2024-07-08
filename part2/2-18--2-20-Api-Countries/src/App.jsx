import { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
const page = 'https://studies.cs.helsinki.fi/restcountries/api/name/'
const allCountriesURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

function allPaises() {
  const [datos, setDatos] = useState({})
  useEffect(() => {
    try {
      axios
        .get(allCountriesURL)
        .then(response => {
          setDatos(response.data)
        }).catch(error => {
          setDatos(error.message)
        })
    } catch (error) {
      setDatos(error.message)
    }
  }, [])

  return datos
}

function App() {
  const [value, setValue] = useState([])
  const [countries, setCountries] = useState(null)
  const [datos, setDatos] = useState({})
  const paises = allPaises()

  useEffect(() => {
    console.log('effect run, countries is now', countries)

    if (countries) {
      let coincidencias = []
      console.log('Monstrando resultados')
      paises.map((pais) => {
        if (pais.name.common.toLowerCase().includes(countries.toLowerCase())) {

          coincidencias.push(pais.name.common)

        }
      })
      if (coincidencias.length === 0) {
        setDatos("No hay coincidencias")
      }else if (coincidencias.length > 10) {
        setDatos("Demasiadas coincidencias, por favor sea más específico")
      } else if (coincidencias.length > 1) {
        setDatos(coincidencias)
      } else {
        try {
          axios
            .get(`${page}${coincidencias[0]}`)
            .then(response => {
              setDatos(response.data)
            }).catch(error => {
              setDatos(error.message)
            })
        } catch (error) {
          setDatos(error.message)
        }
      }
    }



  }, [countries])
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountries(value)
  }

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
            {JSON.stringify(datos, null, 2)}
          </pre>
        </div>

      </main>
    </>
  )
}

export default App
