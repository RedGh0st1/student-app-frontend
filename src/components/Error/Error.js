import React from "react"
import "./Error.css"
export default function Error({ error }) {
  console.log(`<Error /> rendered! error = ${error}`)
  return (
    <div className="Error">
      This was an error: {error}
      <br />
      Please refresh the page or contact support.
    </div>
  )
}
