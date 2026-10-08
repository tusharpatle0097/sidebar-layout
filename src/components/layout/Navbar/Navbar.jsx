import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-logo">
        My Application
      </div>

      <div className="navbar-right">

        <span className="notification">
          🔔
        </span>

        <div className="user-profile">
          <div className="user-avatar">
            TP
          </div>

          <div className="user-info">
            <span className="user-name">
              Tushar Patle
            </span>

            <span className="user-role">
              Administrator
            </span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Navbar;