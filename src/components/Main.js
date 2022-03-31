import React, { useState } from "react"
import styled from "styled-components"
import Search from "./Search"

const api = {
  key: "d26e67ed1ea6bd90cd49c86a33182a09",
  base: "https://api.openweathermap.org/data/2.5/",
}

function Main() {
  //date function
  const dateBuilder = newDate => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    let day = days[newDate.getDay()]
    let month = months[newDate.getMonth()]
    let year = newDate.getFullYear()
    let date = newDate.getDate()

    return `${day}, ${month} ${date}, ${year}`
  }

  //variables
  const [temperature, setTemperature] = useState()
  const [skyCover, setSkyCover] = useState()
  const [city, setCity] = useState()
  const [country, setCountry] = useState()
  const [bgImage, setBgImage] = useState("sunny.jpg")

  //get weather function
  const getWeather = () => {
    const success = position => {
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude

      //fetch weather
      fetch(
        `${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data.weather[0].main)
          let main = data.weather[0].main
          let temp = Math.floor(data.main.temp - 273.15)
          let description = data.weather[0].description
          main = "Rain"
          //change bg image
          if (main === "Rain") {
            setBgImage(prevBgImage => (prevBgImage = "rain.jpg"))
          } else if (main === "Snow") {
            setBgImage(prevBgImage => (prevBgImage = "snow.jpg"))
          }

          setTemperature(temp)
          setSkyCover(description)
          setCity(data.name)
          setCountry(data.sys.country)
        })
    }

    const error = () => {
      alert("unable to retrieve your location")
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }
  //running the weather function
  React.useEffect(() => {
    getWeather()
  }, [])

  return (
    <Wrap
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(./assets/${bgImage}) center left/cover no-repeat`,
      }}
    >
      <SectionCenter>
        <Header>
          <p className="location">
            <span className="location__symbol">⚲</span> {city}, {country}
          </p>
          <p className="date">{dateBuilder(new Date())}</p>
          <h1 className="temperature">
            {temperature}
            <span className="temperature__symbol">°</span>
            <sup className="temperature__unit">C</sup>
          </h1>
          <p className="skyCover">{skyCover}</p>
        </Header>
        <Search />
      </SectionCenter>
      <footer>
        <small>credits to the owner:</small>
        <ul>
          <li>
            <a href="https://www.freepik.com/vectors/fluffy-clouds">
              Fluffy clouds vector created by starline - www.freepik.com
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/vectors/background">
              Background vector created by starline - www.freepik.com
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/vectors/background">
              Background vector created by freepik - www.freepik.com
            </a>
          </li>
        </ul>
      </footer>
    </Wrap>
  )
}

export default Main

const Wrap = styled.div`
  height: 100vh;
  padding-top: 4em;
  padding-left: 2em;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  footer {
    text-align: center;
    padding-bottom: 2em;
    line-height: 1.3;
    li {
      list-style-type: none;

      a {
        color: white;
        font-size: 0.75rem;
      }
    }
  }
`
const SectionCenter = styled.div`
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto;
`

const Header = styled.div`
  margin-bottom: 2em;
  .location {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;

    &__symbol {
      color: red;
      font-weight: 700;
    }
  }

  .date {
    font-size: 1rem;
    font-style: italic;
    margin-left: 2.25em;
  }
  .temperature {
    font-size: 10rem;

    &__symbol {
      font-weight: 300;
    }

    &__unit {
      font-size: 4rem;
      font-weight: 300;
    }
  }

  .skyCover {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-left: 1em;
  }
`
