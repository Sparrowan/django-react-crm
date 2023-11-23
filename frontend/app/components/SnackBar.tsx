import React, { Dispatch, SetStateAction } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type propsTypes = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    message: String,
    severity: AlertColor,
    vertical: "top" | "bottom",
    horizontal: "right" | "left" | "center"

}

export default function SnackBar(props: propsTypes) {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setOpen(false);
    };
    const { vertical, horizontal } = props

    return (
        <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
            <Alert onClose={handleClose} severity={props.severity} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    );
}
