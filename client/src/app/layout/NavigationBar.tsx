import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
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

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

const NavLinkStyles = {
    color: 'inherit',
    typography: 'p',
    '&:hover': {
        color: 'grey.400'
    },
    '&.active': {
        color: 'warning.light'
    },
    textDecoration: 'none'
}

const NavBar = ({ darkMode, handleThemeChange }: Props) => {
    return (
        <>
            <AppBar position="static" sx={{ mb: 4 }}>
                <Toolbar
                    sx={{
                        display: ' flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Box display='flex' alignItems='center'>
                        <Typography
                            variant="h6"
                            component={NavLink}
                            to='/'
                            sx={NavLinkStyles}
                        >
                            Cuk
                        </Typography>
                        <Switch checked={darkMode} onChange={handleThemeChange} />
                    </Box>

                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={NavLinkStyles}
                            >{title.toLocaleUpperCase()}</ListItem>
                        ))}
                    </List>
                    <Box display='flex' alignItems='center'>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            sx={{ mr: 2 }}
                        >
                            <Badge badgeContent='4' color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                        <List sx={{ display: 'flex' }}>
                            {rightLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={NavLinkStyles}
                                >{title.toLocaleUpperCase()}</ListItem>
                            ))}
                        </List>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}


export default NavBar;