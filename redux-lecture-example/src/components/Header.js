import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux-store/auth.slice";
import classes from "./Header.module.css";

const Header = () => {
  const {
    auth: { isAuthenticated },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const LoginState = isAuthenticated ? "Logout" : "Login";
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>{LoginState}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
