import React from "react"
import styled from "styled-components"

const key = "d26e67ed1ea6bd90cd49c86a33182a09"
function Main() {
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
    console.log(day, month, date, year)

    return `${day}, ${month} ${date}, ${year}`
  }
  React.useEffect(() => {
    dateBuilder(new Date())
  }, [])
  return (
    <Wrap
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(./assets/sunny.jpg) center left/cover no-repeat`,
      }}
    >
      <SearchInput type="text" placeholder="Search City..." />
      <Header>
        <p className="location">oshawa, ca</p>
        <p className="date">{dateBuilder(new Date())}</p>
        <h1 className="temperature">1°</h1>
        <p className="skyCover">it's cloudy</p>
      </Header>
    </Wrap>
  )
}

export default Main

const Wrap = styled.div`
  height: 100vh;
  padding-top: 4em;
  padding-left: 2em;
  color: #fff;
`

const SearchInput = styled.input`
  font-size: 1.5rem;
  text-transform: capitalize;
  border: transparent;
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.3)
  );
  color: #fff;
  outline: none;
  margin-bottom: 1.25em;

  &::placeholder {
    color: #fff;
  }
`

const Header = styled.div`
  .location {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .date {
    font-size: 1rem;
    font-style: italic;
  }
  .temperature {
    font-size: 10rem;
  }

  .skyCover {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
