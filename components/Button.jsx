const Button = ({ text }) => {
  return (
    <button className="button" onClick={(event) => (event.target.innerText += '🔥')}>
      {text}
    </button>
  )
}

export default Button
