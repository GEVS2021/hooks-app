import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});    

    useEffect(() => {  
      window.addEventListener("mousemove", onMouseMove);
    
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      }
    }, [])

    const onMouseMove = ({x, y}) => {
      setCoords({x, y});
    }


    return (
        <>
          <h3> El usuario ya existe </h3>
          <h4> coordenada X: { coords.x } </h4>
          <h4> coordenada Y: { coords.y } </h4>
        </>
    )
}
