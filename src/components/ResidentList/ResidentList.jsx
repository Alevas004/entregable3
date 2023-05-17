import { useState } from "react";
import ResidentCard from "../residentCard/ResidentCard";
import { usePagination } from "../.././hooks/usePagination";
import "./ResidentList.css"

// Paginación
// Es dividir en grupos mas pequeños una lista de elementos
// Por lo tanto minimamente se necesitan dos datos: la lista y la cantidad de elementos que debe tener cada grupo

//  0 1 2 3 4 5 6 7 8 9
// [1,2,3,4,5,6,7,8,9,10]

// Paginar en grupos de 3

//  0 = 3 x 0 = 3 x (1 - 1)
//      2 = 3 - 1 = (3 x 1) - 1
// [1,2,3] -> Pagina 1

//  3 = 3 x 1 = 3 x (2 - 1)
//      5 = 6 - 1 = (3 x 2) - 1
// [4,5,6] -> Pagina 2

//  6 = 3 x 2 = 3 x (3 - 1)
//      8 = 9 - 1 = (3 x 3) - 1
// [7,8,9] -> Pagina 3

//  9 = 3 x 3 = 3 x (4 - 1)
//       11 = 12 - 1 = (3 x 4) - 1
// [10,?,?] -> Pagina 4

// limiteInferior = quantity * (numberPage - 1)
// limiteSuperior = quantity * numberPage - 1

// lógica + estado === Hook

const ResidentList = ({ residents = [] }) => {
  const [quantityPagination, setQuantityPagination] = useState(6);

  const [numberPage, residentsSlice, pages, changePageTo] = usePagination(
    residents,
    quantityPagination
  );

  //! Forma 1

  // const getPageButtons = () => {
  //   const buttons = []

  //   for(let i = 1; i <= totalPages; i++) {
  //     const button = <button onClick={() => changePageTo(i)}>{i}</button>

  //     buttons.push(button)
  //   }

  //   return buttons
  // }

  return (
  
    
    <div className="principal_div">

      <div>
      {!residentsSlice.length && <p>No hay residentes </p>}

      {Boolean(residentsSlice.length) && (
        <ul className="card_big_div">
          <li>
            {residentsSlice.map((residentUrl) => (
              <li key={residentUrl}>
                <ResidentCard url={residentUrl} />
              </li>
            ))}
          </li>
        </ul>
      )}
      </div>
   
      <div>
        <button onClick={() => changePageTo(numberPage - 1)}>backwards</button>
        {/* { getPageButtons() } */}
        {pages.map((i) => (
          <button key={i} onClick={() => changePageTo(i)}>
            {i}
          </button>
        ))}
        <button onClick={() => changePageTo(numberPage + 1)}>forwards</button>
      

      <select name="quantity_per_pages" id="" value={quantityPagination} onChange={(e) => setQuantityPagination(Number(e.target.value))}>

          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>

      </select>
      </div>
    </div>
  );
};

export default ResidentList;
