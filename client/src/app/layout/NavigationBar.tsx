import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {

    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: 'catalogue', path: '/catalogue' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const accountLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

const NavBar = ({ darkMode, handleThemeChange }: Props) => {
    return (
        <>
            <AppBar position="static" sx={{ mb: 3 }}>
                <Toolbar>
                    <Typography variant="h6"> Cuk</Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={{ color: 'inherit', typography: 'h6' }}
                            >{title.toLocaleUpperCase()}</ListItem>
                        ))}
                    </List>
                    <List sx={{ display: 'flex' }}>
                        {accountLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={{ color: 'inherit', typography: 'h6' }}
                            >{title.toLocaleUpperCase()}</ListItem>
                        ))}
                    </List>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default NavBar;