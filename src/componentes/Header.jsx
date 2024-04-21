import logo from '../assets/img/logo.png';
import './style/Header.css';

function Header({ titulo }) {
  return (
    <>
      <header className="py-3">
        <div className="logo">
          <img src={logo} alt="Imagen del logo" />
          <h1>{titulo}</h1>
        </div>
      </header>
    </>
  );
}

export default Header;