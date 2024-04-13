import {Drawer, IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useState} from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const list = ['Items', 'Users'];

    return (
        <>
            <IconButton onClick={e => setDrawerOpen(true)} children={<MenuOutlinedIcon/>}/>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={e => setDrawerOpen(false)}
            >
                <List>
                    <ListItem>
                        <ListItemButton>
                            <TranslateOutlinedIcon />
                            <ListItemText primary="Translations" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <AccountCircleOutlinedIcon />
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}
