import {Box, styled} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import {DRAWER_WIDTH} from "./constants/CssConstant";

export const CustomDrawer = styled(MuiDrawer)(
    () => ({
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
    })
);

export const HorizontalBox = styled(Box) (
    () => ({
        display: 'flex',
        flexDirection: 'column'
    })
);