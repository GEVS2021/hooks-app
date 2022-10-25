import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      console.log("Mounted");
    
      return () => {
        console.log("Unmounted");
      }
    }, [])


    return (
        <h3> El usuario ya existe </h3>
    )
}
