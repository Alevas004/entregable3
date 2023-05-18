import { useEffect, useState } from "react"
import { getCharacter } from "../../services/getCharacter"
import "./ResidentCard.css"

// import propTypes from 'pro-types'
const ResidentCard = ({ url }) => {
    const [resident, setResident] = useState(null)

    useEffect(() => {
        const loadResidents = async () => {
            const residentData = await getCharacter(url)
            setResident(residentData)
          
        }
        loadResidents()
    },[url])

  return (
<>
    {!resident ? <p>Loading Character</p> : (
<div className="card">
    {/* <article className="card"> */}
        <div>
            <img src={resident.image} alt={resident.name} />
        </div>

        <h3>{resident.name}</h3>
        <ul>
            <li><b>Specie:</b> {resident.species} </li>
            <li><b>Origin:</b> {resident.origin.name} </li>
            <li><b>Status:</b> {resident.status} </li>
            <li><b>Appearances:</b> {resident.episode.length} </li>
        </ul>
    {/* </article> */}
</div>
    )} 
</>  
  )
}

    // ResidentCard.proTypes = {
    //     url: propTypes.string.isRequired,
    // }

export default ResidentCard