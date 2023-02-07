import logo from './burger-logo.png';

function App() {
  
  return (
    <>
      <nav className="navbar " style={{backgroundColor: '#703b09'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Burger Builder" width="50" height="50" />
          </a>
          <ul className="navbar-nav ml-auto" style={{display: 'flex', flexDirection: 'row'}}>
            <li className="nav-item" style={{display: 'inline-block', width: 'auto', margin: '0 10px'}}>
              <a className="nav-link" href="#" style={{color: 'white'}}>Burger Builder</a>
            </li>
            <li className="nav-item" style={{display: 'inline-block', width: 'auto', margin: '0 10px'}}>
              <a className="nav-link" href="#" style={{color: 'white'}}>Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
