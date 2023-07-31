import React, { useEffect } from "react";
import styles from "./UserNav.module.css"
import { useSelector , useDispatch } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo-bull.png"
import { userLogOut , setUser } from "../../redux/actions/actionsUser.js";

// REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";


const UserNav = () => {

    const user = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
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
    <nav className={styles.nav}>
        <img src={logo} alt="logo" className={styles.logo}/>
        {user.email 
            ? 
            <div>
                <Link to={'/account'}>🙋‍♂️ {user.firstname}</Link>
                <Button onClick={handleLogOut}>Log out</Button>
            </div>
            : 
            <Link to={'/login'}>🙋‍♂️ Log In</Link>
        }
        <Link to={'/shop'}>🛒 Carrito</Link>
        <Link to={'/settings'}>🛠 Settings</Link>
    </nav>
)};

export default UserNav;