const Button = (proes) => {
  return (
    <>
      <button className={"btn " +  proes.type}>
        {proes.title}
      </button>
    </>
  )
}

export default Button;
