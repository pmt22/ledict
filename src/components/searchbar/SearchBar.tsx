import {AppBar, Box, Toolbar, Typography} from "@mui/material";

export default function SearchBar() {
    return (
        <AppBar position={"sticky"}>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    LEDICT
                </Typography>
            </Toolbar>
        </AppBar>
    );
}