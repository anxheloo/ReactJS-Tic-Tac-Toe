import logo from "../../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="my Logo"></img>
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;
