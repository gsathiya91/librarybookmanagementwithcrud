import React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button
}
    from '@mui/material';
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Library-Books Management
                        </Typography>
                        <Button color="inherit"onClick={()=>navigate("/adminpage")}>Admin Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            
        </>
    )
}

export default NavBar;