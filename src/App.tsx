import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import {AVAILABLE_FUNCTIONALITIES} from "./constants/AppConstants";
import {DRAWER_WIDTH} from "./constants/CssConstant";
import {HorizontalBox} from "./App.style";
import SearchBar from "./components/searchbar/SearchBar";

export default function App() {

    return (
        <Box sx={{display: 'flex'}}>
            <Drawer variant={"permanent"} sx={{width: DRAWER_WIDTH}}>
                <List sx={{width: DRAWER_WIDTH}}>
                    {AVAILABLE_FUNCTIONALITIES.map(f => (
                        <>
                            <ListItem key={f.name}>
                                <ListItemButton>
                                    {f.element}
                                    <ListItemText primary={f.name}/>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                        </>
                    ))
                    }
                </List>
            </Drawer>
            <HorizontalBox>
                <SearchBar/>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
            </HorizontalBox>

        </Box>
    );
}
