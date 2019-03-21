import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';


function AlertDialog(props){
	const { handleDelete, msg, handleClose, head, open} = props;
	return (
		<Dialog
			open={open}
			onClose={() => handleClose()}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{head}
			</DialogTitle>
			<DialogContent>
				{msg}
			</DialogContent>
			<DialogActions>
				<Button onClick={() => handleClose()} color="secondary">
					No, Thanks
				</Button>
				<Button variant='contained' onClick={() => handleDelete()} color="primary" autoFocus>
					Please Do
				</Button>
			</DialogActions>
		</Dialog>
	);
}
AlertDialog.propTypes = {
	handleDelete: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	msg: PropTypes.object.isRequired,
	head: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
};
export default AlertDialog;
