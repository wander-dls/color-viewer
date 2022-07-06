import colorNames from 'colornames'

const ColorName = ({color, setColor, setHex, darkText, setDarkText}) => {
  return (
   
    <form onSubmit={e => e.preventDefault()}>
        <label>Add Color Name:</label>
        <input 
          autoFocus
          type="text"
          placeholder='Add color name'
          required
          value={color}
          onChange={e => {
            setColor(e.target.value)
            setHex(colorNames(e.target.value))
          }}
        />
        <button
          type="button"
          onClick={() => setDarkText(!darkText)}
        >
          Toggle text color
        </button>
    </form>
    
  )
}

export default ColorName