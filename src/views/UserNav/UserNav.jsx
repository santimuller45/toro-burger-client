import React, { useEffect } from "react";
import styles from "./UserNav.module.css"
import { useSelector , useDispatch } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo-bull.png"

//REDUX ACTIONS
import { userLogOut , setUser } from "../../redux/actions/actionsUser.js";
//>

// import { useLogin } from "../../customHooks/useLogin.js";

// REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//>


const UserNav = () => {

    const user = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // const { user } = useLogin();
    const handleLogOut = async () => {
        dispatch(userLogOut());
        navigate('/');
    };

    const pathToAccount = () => navigate('/account');
    const pathToShop = () => navigate('/cart');
    const pathToSettingsFoods = () => navigate('/settings/foods');
    const pathToOrders = () => navigate('/settings/orders');


    useEffect(() => {
        const userLocalStorage = localStorage.getItem('user');
        if (userLocalStorage) {
            const userLocalStorageRedux = JSON.parse(userLocalStorage);
            dispatch(setUser(userLocalStorageRedux));
        }
    },[])

return (
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><img src={logo} alt="logo" className={styles.logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <strong>
            {user.email
                ?   (<strong><NavDropdown title={`🙋‍♂️${user.firstname}`} id="account-nav-dropdown">
                        <NavDropdown.Item onClick={pathToAccount}><strong>Mi Cuenta</strong></NavDropdown.Item>
                        <NavDropdown.Item onClick={handleLogOut}><strong>Log out</strong></NavDropdown.Item>
                    </NavDropdown></strong>)
                :  (<Link to={'/login'} className={styles.item}><strong>🙋‍♂️ LogIn</strong></Link>)
            }
              <NavDropdown title="🛒Carrito" id="shop-nav-dropdown">
                <NavDropdown.Item onClick={pathToShop}><strong>Ver Carrito</strong></NavDropdown.Item>
              </NavDropdown>
            </strong>
            <strong>
              <NavDropdown title="🛠 Settings" id="settings-nav-dropdown">
                <NavDropdown.Item onClick={pathToOrders}>Pedidos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={pathToSettingsFoods}>Modificar Menú</NavDropdown.Item>
              </NavDropdown>
            </strong>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
)};

export default UserNav;