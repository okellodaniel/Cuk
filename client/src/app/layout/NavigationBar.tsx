import { AppBar, Toolbar, Typography } from "@mui/material";


const NavBar = () => (
    <>
        <AppBar position="static" sx={{ mb: 3 }}>
            <Toolbar>
                <Typography variant="h6"> Cuk</Typography>
            </Toolbar>
        </AppBar>
    </>
)

export default NavBar;