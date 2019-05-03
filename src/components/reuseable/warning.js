import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Warning extends React.Component {
  render() {
		const { open, handleClose } = this.props;
    return (
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => handleClose()}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					You need to be logged in to buy a ticket.
				</DialogTitle>

				<DialogContent style={{ display: 'flex', justifyContent: "center" }} >
					<img src="/static/sadface.svg" width={150} height={150} />
				</DialogContent>
			</Dialog>
    );
  }
}

Warning.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Warning;