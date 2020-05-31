import React from "react"
import {FaFilm} from "react-icons/fa"

function Navbar(){
    return(
        <table className="table">
        <tbody>
          <tr>
            <td className="logo">
              <FaFilm size={50}/>
            </td>
            <td className="title">
              Movie Search Engine
            </td>
          </tr>
        </tbody>
      </table>
    )
}

export default Navbar