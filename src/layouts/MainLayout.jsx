import { NavLink, Outlet } from "react-router-dom";


function MainLayout() {

  return (
    <div id="page">
      <div id="container">
        <NavLink to="user">User page</NavLink> |
        <NavLink to="admin"> Admin page</NavLink> |
        <NavLink to="/"> Home </NavLink> 
        <div>
          <Outlet />
        </div>
        <h1> IntraNet </h1>
      </div>
    </div>
  );
}

export default MainLayout;
