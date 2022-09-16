import React from 'react'

function Hero({ name }) {
    if (name === "Prii")
    {
        throw new Error("error")
    }
  return (
    <div> { name}</div>
  )
}

export default Hero