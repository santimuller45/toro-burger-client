import React, { useEffect } from "react";
import styles from "./UserNav.module.css"
import { useSelector , useDispatch } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo-bull.png"
import { userLogOut , setUser } from "../../redux/actions/actionsUser.js";

// import { useLogin } from "../../customHooks/useLogin.js";

// REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
        <>
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
                    {   user.adminType
                        ?  <Link to={'/settings'} className={styles.item}>🛠 Settings</Link>
                        : null
                    }
                </Nav>
             </Container>
        </Navbar>
            {/* <div className="row justtify-content-center align-items-center">
                <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
                    <img src={logo} alt="logo" className={styles.logo}/>
                </figure>
                <Col xs={7}>
                    {user.email 
                        ? 
                        <div>
                            <Link to={'/account'} className="col-5 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-10">🙋‍♂️ {user.firstname}</Link>
                            <Button variant="outline-danger" size="sm" onClick={handleLogOut}>Log out</Button>
                        </div>
                        : 
                        <Link to={'/login'} className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-10">🙋‍♂️ Log In</Link>
                    }
                </Col>
                <Link to={'/cart'} className="col-2 col-sm-1 col-md-1 col-lg-1">🛒 Carrito</Link>
                {   user.adminType
                    ?  <Link to={'/settings'} className="col-2 col-sm-1 col-md-1 col-lg-1">🛠 Settings</Link>
                    : null
                }
            </div> */}
        </>
)};

export default UserNav;