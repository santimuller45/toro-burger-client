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


    useEffect(() => {
        const userLocalStorage = localStorage.getItem('user');
        if (userLocalStorage) {
            const userLocalStorageRedux = JSON.parse(userLocalStorage);
            dispatch(setUser(userLocalStorageRedux));
        }
    },[])

return (
    <Navbar className={styles.nav}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <h1 className={styles.title}><strong>TORO BURGER & BEER</strong></h1>
        <Container>
            <Nav className={styles.nav}>
                {user.email 
                    ? 
                    (<div className={styles.item}>
                        <Link to={'/account'} className={styles.item}>🙋‍♂️ {user.firstname}</Link>
                        <Button variant="danger" size="sm" onClick={handleLogOut}>Log out</Button>
                    </div>)
                    :
                    (<Link to={'/login'} className={styles.item}>🙋‍♂️ Log In</Link>)
                }
                <Link to={'/cart'} className={styles.item}>🛒 Carrito</Link>
                {user.adminType
                    ?
                    // (<NavDropdown title="🛠 Settings" id="basic-nav-dropdown" className={styles.item}>
                    //     <NavDropdown.Item>
                    //         <Link to={'/settings'} className={styles.item}>Foods</Link>
                    //     </NavDropdown.Item>
                    //     <NavDropdown.Divider />
                    //     <NavDropdown.Item href="#action/3.4">Users</NavDropdown.Item>
                    //     <NavDropdown.Divider />
                    //     <NavDropdown.Item href="#action/3.4">Payments</NavDropdown.Item>
                    // </NavDropdown>)
                    <Link to={'/settings'} className={styles.item}>🛠 Settings</Link>
                    : null
                }
            </Nav>
        </Container>
    </Navbar>
)};

export default UserNav;