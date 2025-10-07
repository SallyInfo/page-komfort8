import Button from "./Button";
import "../assets/styles/header.css";

const Header = () => {
  return (
    <>
     <header>
        <h2>Komfort</h2>
        <nav>
            <a href="">All Category</a>
            <a href="">Gift Cards</a>
            <a href="">Special Event</a>
        </nav>
          <div className="btn">
         <Button title="Login"  type="btn1"/>
         <Button title="Signup" type="btn2" />
          </div>
     </header> 
    </>
  )
}

export default Header;
