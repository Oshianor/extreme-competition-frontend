import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Router from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  TextField: {
    color: 'blue'
  }
});


class CreateFormDialog extends React.Component {
  state = {
    name: "",
    nameError: {
      status: false,
      msg: ''
    },
    description: "",
  }

  handleFormCreation = () => {
    const { name } = this.state;
    
    if (name !== "") {
      if (name.length > 2) {
        // Router.push({
        //   pathname: '/form/builder',
        //   // query: { name: 'Zeit' }
        // });
        Router.push("builder");
      } else {
        this.setState({
          nameError: {
            status: true,
            msg: "*Form name field must be a min of 3 characters."
          }
        })
      }
    } else {
      this.setState({
        nameError: {
          status: true,
          msg: "*Form name field is required."
        }
      })
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    const { classes } = this.props;
    const { nameError } = this.state;
    
    return (
      <div>
        <Dialog
          open={this.props.toggle}
          onClose={() => this.props.handleToggle()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Form</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Create a new form and customise however you like
            </DialogContentText>
            <TextField
              autoFocus
              margin="normal"
              variant="outlined"
              id="name"
              label="Form Name"
              className={classes.TextField}
              onChange={this.handleChange('name')}
              fullWidth
              error={nameError.status}
              helperText={nameError.msg}
            />
            <TextField
              margin="normal"
              variant="outlined"
              multiline
              onChange={this.handleChange('description')}
              rows={2}
              id="name"
              label="Form Description"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.handleToggle()} color="default">
              Cancel
            </Button>
            <Button onClick={this.handleFormCreation} variant="contained" color="secondary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

CreateFormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(CreateFormDialog);