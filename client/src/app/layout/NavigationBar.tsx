import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props{

    darkMode: boolean;
    handleThemeChange: () => void;
}

function NavBar({darkMode,handleThemeChange}: Props) {
    return (
        <>
            <AppBar position="static" sx={{ mb: 3 }}>
                <Toolbar>
                    <Typography variant="h6"> Cuk</Typography>
                    <Switch checked = {darkMode} onChange={handleThemeChange} />
                </Toolbar>
            </AppBar>
        </>
    )
}


export default NavBar;