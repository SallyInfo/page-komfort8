import Card from "./Card";
import Button from "./Button";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const Cards = () => {
  return (
    <>
    <div className="container">
      <p className="lable">Trending Now - Step Into Style</p>
      <div className="btns">
        <button className="btn2">All</button>
        <button className="btn4">SHORTS</button>
        <button className="btn4">HAT</button>
        <button className="btn4">JACKETS</button>
        <button className="btn4">SHOES</button>
        <button className="btn4">T-SHIRT</button>
      </div>
      <div className="cards">
      <Card img={img4} name="T-shirt" para="White T-shirt" newprice="40$  " olaprice=""  />
      <Card img={img3}  name="Men's  Coat" para="Black Graphic T-shirt" newprice="540$  " olaprice=" 500$"  />
      <div className="new">
      <Card img={img2} className="width" name="T-shirt" para="Brown T-Shirt" newprice="40$  " olaprice=" 50$" />
      {/* <Button className="botn5" type="btn5" title="ADD To Card"/> */}
       </div>
      <Card img={img1} name="Men's Blazer" para="blue Blazer over..." newprice="80$  " olaprice=""  />
      </div>
      </div>
    </>
  )
}

export default Cards;
