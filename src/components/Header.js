import Logo from './img/covid19_icon.png';

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={Logo} alt="COVID-19" />
        <p>COVID-19</p>
      </div>
      <h1>STATISTIC</h1>
      <input type="search" placeholder="Search..." />
    </div>
  );
}

export default Header;
