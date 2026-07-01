import seriesData  from "../api/seriesData.json";
import { SeriesCard } from "./seriesCard";
// Components
// Netflix Component

const NetflixSeries = () => {
  return (
    <ul className ="grid grid-three--cols">
      {
        seriesData.map((currElem)=> {
         return(
          // Here currElem is a PROP
         <SeriesCard key={currElem.id} currElem = {currElem}/>
          );  
        })
      }
      </ul>
   );
};

// DEFAULT EXPORT
export default NetflixSeries ;

