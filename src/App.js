import logo from './burger-logo.png';

function App() {
  
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Burger Builder" width="50" height="50" />
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{display: 'inline-block', width: 'auto', margin: '0 10px'}}>
              <a className="nav-link" href="#">Menu 1</a>
            </li>
            <li className="nav-item" style={{display: 'inline-block', width: 'auto', margin: '0 10px'}}>
              <a className="nav-link" href="#">Menu 2</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
