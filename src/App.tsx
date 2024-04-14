import {Drawer, IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useState} from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {AVAILABLE_FUNCTIONALITIES} from "./constants/AppConstants";

export default function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <IconButton onClick={e => setDrawerOpen(true)} children={<MenuOutlinedIcon/>}/>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={e => setDrawerOpen(false)}
            >
                <List>
                    {AVAILABLE_FUNCTIONALITIES.map(f => (
                        <ListItem key={f.name}>
                            <ListItemButton>
                                {f.element}
                                <ListItemText primary={f.name} />
                            </ListItemButton>
                        </ListItem>
                    ))
                    }
                </List>
            </Drawer>
        </>
    );
}
