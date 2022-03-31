import React, { useState } from "react"
import styled from "styled-components"

const api = {
  key: "d26e67ed1ea6bd90cd49c86a33182a09",
  base: "https://api.openweathermap.org/data/2.5/",
}
function Search() {
  //variables
  const [temperature, setTemperature] = useState()
  const [skyCover, setSkyCover] = useState()
  const [location, setLocation] = useState()
  const [query, setQuery] = useState()

  //search city for weather information function
  const search = event => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(data => {
          let temp = Math.floor(data.main.temp)
          let description = data.weather[0].description

          setTemperature(prevTemperature => {
            return <p className="temperature">{(prevTemperature = temp)}℃</p>
          })
          setSkyCover(prevSkyCover => {
            return <p className="skyCover">{(prevSkyCover = description)}</p>
          })

          setLocation(prevLocation => {
            return (
              <p className="location">
                {(prevLocation = data.name)} , {data.sys.country}
              </p>
            )
          })
        })
    }
  }

  return (
    <Wrap>
      <SearchInput
        type="text"
        placeholder="Search City..."
        onKeyDown={search}
        onChange={e => setQuery(e.target.value)}
      />
      {location}
      {temperature}
      {skyCover}
    </Wrap>
  )
}

export default Search

const Wrap = styled.div`
  .location,
  .skyCover {
    font-size: 1.5rem;
    text-shadow: 1px 2px rgba(50, 50, 70, 0.5);
    margin-bottom: 10px;
    text-transform: capitalize;
    letter-spacing: 1.25px;
  }
  .temperature {
    letter-spacing: 1.25px;
    display: inline-block;
    font-weight: 700;
    font-size: 4rem;
    text-shadow: 1px 2px rgba(50, 50, 70, 0.5);
    background: rgba(255, 255, 255, 0.5);
    padding: 0 9px;
    border-radius: 0.3em;
    box-shadow: 1px 2px rgba(50, 50, 70, 0.5);
    margin-bottom: 10px;
  }
`

const SearchInput = styled.input`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: #111827;
  background: rgba(255, 255, 255, 0.5);
  outline: none;
  border: none;
  padding: 0.25em;
  box-shadow: 1px 2px rgba(50, 50, 70, 0.5);
  border-radius: 0.3em;
  margin-bottom: 0.25em;

  &::placeholder {
    color: #fff;
  }
`
