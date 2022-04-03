import React from "react"

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  countries,
}) => {
  
  
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }

  

  return (
    <>
      <form className="form" id="form">
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
          onChange={(e) => searchCountries(e.target.value)}
        />
      </form>
    </>
  )
}

export default Filter
