import "./Header.css";
import HeaderImg from "../../assets/download.png";
const Header = () => {
  return (
    <>
        <div className="header">
            <img src={HeaderImg} alt="dollar-img" />
            <h2>Investment Calculator</h2>
        </div>
    </>
  )
}

export default Header