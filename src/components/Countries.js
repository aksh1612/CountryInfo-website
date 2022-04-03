import React, { useState, useEffect } from "react"
import Filter from "./Filter"

const url = "https://restcountries.com/v2/all"

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
      setCountries(countries)
      setIsLoading(false)
    }

    fetchCountries()
  }, [])
 

  return (
    <>
       <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
      />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : searchInput.length > 1 ? (
        <section className="countries">
          {filtered.map((country) => {
            const {  name, flag, population, region, capital } =
              country

            return (
                <article>
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="details">
                    <h4 className="country-name">
                      Name: <span>{name}</span>
                    </h4>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
            )
          })}
        </section>
      ) : (
        <section className="countries">
          {countries.map((country) => {
            const {  name, flag, population, region, capital } =
              country

            return (
                <article>
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="details">
                    <h4 className="country-name">
                      Name: <span>{name}</span>
                    </h4>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default Countries
