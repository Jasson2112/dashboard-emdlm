import logo from './logo.svg';
import TotalProducts from "./components/TotalProducts";
import TotalUsers from "./components/TotalUsers";
import TotalCategories from "./components/TotalCategories";
import CategoryProducts from "./components/CategoryProducts";
import LastProduct from "./components/LastProduct";
import Products from "./components/Products";
import './App.css';

function App() {
  return (
    <div id="wrapper">
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
              <img className="w-100" src="assets/images/Logo-EMDLM.png" alt="El Mundo De La Musica" />
            </div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fas fa-music"/>
              <span>Dashboard - EMDLM</span></a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">Actions</div>
          {/* Nav Item - Pages */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="/">
              <i className="fas fa-fw fa-folder" />
              <span>Pages</span>
            </a>
          </li>
          {/* Nav Item - Charts */}
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-chart-area" />
              <span>Charts</span></a>
          </li>
          {/* Nav Item - Tables */}
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-table" />
              <span>Tables</span></a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <img class= "bannerEMDLM" src="assets/images/Banner-principal-2.png" alt="Banner principal"></img>
            {/* End of Topbar */}
            {/* Content Row Top */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>
              {/* Content Row Movies*/}
              <div className="row">
                {/* Movies in Data Base */}
                <div className="col-md-4 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de Productos</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800"><TotalProducts/></div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-film fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Total awards */}
                <div className="col-md-4 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total de Categorías</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800"><TotalCategories/></div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-award fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Actors quantity */}
                <div className="col-md-4 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de Usuarios
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800"><TotalUsers/></div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-user fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End movies in Data Base */}
              {/* Content Row Last Movie in Data Base */}
              <div className="row">
                {/* Last Movie in DB */}
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Cargado</h5>
                    </div>
                    <div className="card-body">
                      {/* <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '40rem'}} src="assets/images/mandalorian.jpg" alt=" Star Wars - Mandalorian " />
                      </div> */}
                      <LastProduct/>
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p> */}
                    </div>
                  </div>
                </div>
                {/* End content row last movie in Data Base */}
                {/* Genres in DB */}
                <div className="col-lg-6 mb-4">						
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">Productos por Categoría</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <CategoryProducts/>
                            
                      </div>
                    </div>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">Listado de Productos</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                      <Products/>
                            
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            {/*End Content Row Top*/}
          </div>
          {/* End of MainContent */}
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Dashboard 2021</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
  );
}

export default App;
