import logo from '../images/logo-svg.svg';

function Header() {
  return(
    <header className="header">
      {/* <img className="logo" src="<%=require("./images/logo-svg.svg")%>" alt="Around logo"> */}
      <img className="logo" src={logo} alt="Around logo" />
    </header>
  )
}

export default Header;