import ColorName from "./ColorName"
import DisplayColor from "./DisplayColor"
import { useState } from "react"

function App() {
  const [color, setColor] = useState('')
  const [hex, setHex] = useState('')
  const [darkText, setDarkText] = useState(true)

  return (
    <div className="App">
      <DisplayColor 
        color={color}
        hex={hex}
        darkText={darkText}
      />
      <ColorName 
        color={color}
        setColor={setColor}
        setHex={setHex}
        darkText={darkText}
        setDarkText={setDarkText}
      />
    </div>
  );
}

export default App;
