import React from "react"
import styled from "styled-components"

const api = {
  key: "d26e67ed1ea6bd90cd49c86a33182a09",
  base: "https://api.openweathermap.org/data/2.5/",
}
function Search() {
  // //variables
  // const [temperature, setTemperature] = useState()
  // const [skyCover, setSkyCover] = useState()
  // const [city, setCity] = useState()
  // const [country, setCountry] = useState()

  //  //search city for weather information function
  //  const search = (event) => {

  // }
  return (
    <Wrap>
      <SearchInput type="text" />
    </Wrap>
  )
}

export default Search

const Wrap = styled.div``
const SearchInput = styled.input``
