import React, { Dispatch, SetStateAction } from 'react'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { commonAvatar, mediumAvatar } from '../../theme/themes/avatars'
import SearchSection from './SearchSection';
import NotificationSection from './NotificationSection';





interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    drawerwidth: number
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerwidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerwidth,
        width: `calc(100% - ${drawerwidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    background: '#ffffff',
    border: 'none',
}));

type propsTypes = {
    open: boolean,
    toggleDrawer: () => void,
    drawerwidth: number
}



const Navbar = (props: propsTypes) => {
    const theme = useTheme();

    return (
        <AppBar position="absolute" open={props.open} drawerwidth={props.drawerwidth}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(props.open && { display: 'none' }),
                        ...commonAvatar,
                        ...mediumAvatar,
                        transition: 'all .2s ease-in-out',
                        background: theme.palette.secondary.light,
                        color: theme.palette.secondary.dark,
                        '&:hover': {
                            background: theme.palette.secondary.dark,
                            color: theme.palette.secondary.light
                        }
                    }}
                >
                    <MenuIcon />

                </IconButton>
                <SearchSection />
                <NotificationSection />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar