import React from 'react'
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';


interface DrawerProps extends MuiDrawerProps {
    drawerwidth: number
}
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<DrawerProps>(
    ({ theme, open, drawerwidth }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerwidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

type propsTypes = {
    open: boolean,
    toggleDrawer: () => void,
    drawerwidth: number
}

const Sidebar = (props: propsTypes) => {
    return (
        <Drawer variant="permanent" open={props.open} drawerwidth={props.drawerwidth}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={props.toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {/* {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems} */}
            </List>
        </Drawer>
    )
}

export default Sidebar