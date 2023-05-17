import { useState } from "react";
import "./SearchForm.css"


const SearchForm = ({oeMeEstoyEnviando}) => {
    
const [searchLocation, setSearchLocation] = useState("");
const [errorSearchLocation, setErrorSearchLocation] = useState('')

const handleChange = (e) => {
    const newValue = e.target.value

    // Valida que desde el principio hasta el final del string hayam solo numeros
    // if (!/^\d$/.test(newValue)) setErrorSearchLocation("El ID debe ser un numero del 1 al 126")

      // const valueAsNumber = Number(newValue)

      if (newValue && isNaN(newValue)) {
        // Si el valor no es vacio y no es numero valido
        setErrorSearchLocation("Debe ser un número")
      } else if (newValue && Number(newValue) < 1){
        // Si el valor no es vacio y el numero es menor que 1
        setErrorSearchLocation("El menor ID existente es 1")
      } else if (newValue && Number(newValue) > 126) {
        // 
        setErrorSearchLocation("El ID máximo existente es 126")
      } else{
        setErrorSearchLocation("")
      }

      setSearchLocation(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

        // Si no hay valor de busqueda o el valor tiene un error no vamos a hacer nada
        if (errorSearchLocation) return

    oeMeEstoyEnviando(searchLocation)
  }
  return (
    <div className="search">
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={searchLocation}
      onChange={handleChange}
    />
      <p style={{ color: "red"}}> {errorSearchLocation}</p>
    <button type="submit">Search</button>

    </form>
    </div>
  )
}

export default SearchForm