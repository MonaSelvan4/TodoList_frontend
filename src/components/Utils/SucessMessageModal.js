import React from "react";
import {Modal, Button, Typography} from "@material-ui/core";
import "../App.css"

export default function SuccessMessageModal(props){
    return (
        <React.Fragment>
            <Modal
            open={props.open}>
                <div className="modal paper">
                    <Typography variant="h5" gutterBottom>
                        Success
                    </Typography>
                    <Typography variant="subtitle1">
                        {props.message}
                    </Typography>
                </div>
                <Button color="primary" variant="contained" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal>
        </React.Fragment>
    )
}