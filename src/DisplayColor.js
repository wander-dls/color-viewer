import React from 'react'

const DisplayColor = ({color, hex, darkText}) => {
  return (
    <section 
        className="square"
        style={{
            backgroundColor: color,
            color: darkText ? "#000" : "#fff"
        }}>
        <p>{color ? color : "Empty Value"}</p>
        <p>{hex ? hex : null}</p>
        
    </section>
  )
}

DisplayColor.defaultProps = {
    color: "Empty Color Value"
}
export default DisplayColor