import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { getLocationById } from "./services/getLocationById";
import { getRandomNumber } from "./Utils/getRandomNumber";
import Location from "./components/Location";
import Loader from "./components/loader/Loader";
import ResidentList from "./components/ResidentList/ResidentList";
import SearchForm from "./components/searchForm/SearchForm";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"

const backgrounds = [img1, img2, img3]
// promise.all()
// Si alguna falla todo el promise all falla, es decir, lanzamos 100 peticiones y de esas fallan 2 entonces eprderia los otros 98 datos.

// El valor de un input en React no puede ser null o undefined
function App() {
  const [location, setLocation] = useState(null);




  const handleQueMovioElTeach = async (id) => {

    let locationInfo

    if (!id) {
      const randomId = getRandomNumber(1, 126)
      locationInfo = await getLocationById(randomId)
    } else {
      locationInfo = await getLocationById(id)
    }

   setLocation(locationInfo)
   
  }

  useEffect(() => {
    const loadLocation = async () => {
      const randomId = getRandomNumber(1, 126);
      const locationInfo = await getLocationById(randomId);

      setLocation(locationInfo);
    };
    loadLocation();
  }, []);

  return (
 
<div className="principal_main" >
      <h1>Rick and Morty</h1>

      <section className="search-part">
     <SearchForm oeMeEstoyEnviando={handleQueMovioElTeach} />
     </section>

      <section className="location_info" >
      {location ? <Location location={location} /> : <Loader />}
      </section>

      <h2>Residents</h2>
      <section className="resident_card">
      
       <ResidentList residents={location?.residents} />
      </section>
</div> 

  );
}

export default App;
