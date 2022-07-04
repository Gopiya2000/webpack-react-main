import React, { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { authActions } from '../store';
import { AppBar, Box, Button, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import { useStyles, appBar, loginTabs, loginBox, logoutButton, signupButton, LoginButton } from '../styles/styles'
import { setLogout, setSignOut, setSignUp } from './redux/authActions'

const Header = () => {
    const location = useLocation()
    const classes = useStyles()
    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const [selectTab, setSelectTab] = useState(0)
    const logoutHandler = () => {
        dispatch(setLogout())
    }
    const signupHandler = () => {
        dispatch(setSignUp())
    }
    const loginHandler = () => {
        dispatch(setSignOut())
    }
    useEffect(() => {
        if (location.pathname === "/" || location.pathname === '/blogs') {
            setSelectTab(0)
        }
        else if (location.pathname === "/blogs/add") {
            setSelectTab(1)
        }
        else if (location.pathname === "/myBlogs") {
            setSelectTab(2)
        }
        else if (location.pathname === "/profile/:id") {
            setSelectTab(3)
        }
        else if (location.pathname === "/followers/:id") {
            setSelectTab(4)
        }
    }, [])
    return <AppBar position="sticky" style={appBar}>
        <Toolbar>
            <Typography variant='h4'>Blog App</Typography>
            {login && <><Box className={classes.loginForm}>
                <Tabs value={selectTab} textColor= 'inherit' onChange={(e, value) => setSelectTab(value)}>
                    <Tab LinkComponent={Link} to="/blogs" label="Home" />
                    <Tab LinkComponent={Link} to="/blogs/add" label="Create Blog" />
                    <Tab LinkComponent={Link} to="/myBlogs" label="My Blog" />
                    <Tab LinkComponent={Link} to="/profile/:id" label="Profile" />
                    <Tab LinkComponent={Link} to="/followers/:id" label="My Followers" />
                </Tabs>
            </Box></>}
            <Box style={loginBox}>
                {!login && <>
                    <Button onClick={loginHandler} LinkComponent={Link} to="/auth" variant='contained' style={LoginButton}>Login</Button>
                    <Button onClick={signupHandler} LinkComponent={Link} to="/auth" variant='contained' style={signupButton}>Signup</Button></>}
                {login && (
                    <Button
                    onClick={logoutHandler}
                        LinkComponent={Link}
                        to="/blogs"
                        variant='contained'
                        style={logoutButton}
                    >
                        Logout
                    </Button>
                )}
            </Box>
        </Toolbar>
    </AppBar>
}

export default Header;