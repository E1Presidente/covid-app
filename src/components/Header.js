import Logo from './img/covid19_icon.png';

function Header({ search }) {
  return (
    <div className="Header">
      <div className="logo">
        <img src={Logo} alt="COVID-19" />
        <p>COVID-19</p>
      </div>
      <h1>STATISTIC</h1>
      <input type="search" placeholder="Search..." onInput={event => search(event.target.value)} />
    </div>
  );
}

export default Header;
