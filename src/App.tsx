import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {DRAWER_WIDTH} from "./constants/CssConstant";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import ErrorPage from "./components/error/ErrorPage";
import GlossaryMain from "./components/glossary/GlossaryMain";
import {PdFunctionality} from "./models/PdFunctionality";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TranslationDetailMain from "./components/glossary/detail/TranslationDetailMain";
import {Mode} from "./constants/Enums";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GlossaryMain/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/trans/create',
        element: <TranslationDetailMain mode={Mode.CREATE}/>
    }
]);

const AVAILABLE_FUNCTIONALITIES: Array<PdFunctionality> = [
    {
        name: 'Glossary',
        element: <TranslateOutlinedIcon/>
    },
    {
        name: 'Users',
        element: <AccountCircleOutlinedIcon/>
    },
    {
        name: 'Admin',
        element: <AccountCircleOutlinedIcon/>
    },
];

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

            <RouterProvider router={router}/>
        </Box>
    );
}
