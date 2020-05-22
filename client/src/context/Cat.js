import React, { useState } from 'react'

const catContext = React.createContext()

export function CatProvider({ children }) {
  let [cat, setCat] = useState(null)

  return (
    <catContext.Provider value={{ cat, setCat }}>
      {children}
    </catContext.Provider>
  )
}

export function useCat() {
  return React.useContext(catContext)
}
