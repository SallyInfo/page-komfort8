import Button from "./Button";


const Card = (props) => {
  return (
    <>
      <Button />
      <div className="card">
      <img src={props.img} />
      <b>{props.name}</b>
      <p>{props.para}</p>
      <span>{props.newprice}
      <del>{props.olaprice}</del>
      </span>
      </div>
    </>
  )
}

export default Card;
