export enum NavPage {
  List = 1,
  Game = 2,
}

type Props = {
  onMenuSelect: (page: NavPage) => void;
};

const NavMenu = (props: Props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a
            className="navbar-item"
            onClick={() => props.onMenuSelect(NavPage.List)}
          >
            Lista
          </a>
          <a
            className="navbar-item"
            onClick={() => props.onMenuSelect(NavPage.Game)}
          >
            Gra
          </a>
          {/* <a className="navbar-item">Documentation</a> */}

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
