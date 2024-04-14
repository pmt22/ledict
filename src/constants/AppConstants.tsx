import {PdFunctionality} from "../components/models/PdFunctionality";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const AVAILABLE_FUNCTIONALITIES: Array<PdFunctionality> = [
    {
        name: 'Translations',
        element: <TranslateOutlinedIcon/>
    },
    {
        name: 'Users',
        element: <AccountCircleOutlinedIcon />
    },
]