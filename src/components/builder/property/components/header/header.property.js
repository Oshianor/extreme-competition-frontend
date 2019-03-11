import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { HuePicker } from 'react-color';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  container: {
    display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class HeaderProperty extends React.Component {

  handleChange = name => event => {
    // this.setState({
    //   [name]: event.target.value,
    // });
	};
	
	handleChangeComplete = () => {

	}

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
					className={classes.textField}
					required
          // value={this.state.name}
					onChange={this.handleChange('name')}
					fullWidth
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
					rowsMax="4"
					fullWidth
          // value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
          helperText="Description "
          variant="outlined"
        />
				<Typography>
					Background
				</Typography>
				<HuePicker 
					width="280px"
					onChangeComplete={this.handleChangeComplete}
				/>
				<Typography>
					Text Color
				</Typography>
				<HuePicker 
					width="280px"
					onChangeComplete={this.handleChangeComplete}
				/>
				<Typography>
					Text Color
				</Typography>
				<HuePicker 
					width="280px"
					onChangeComplete={this.handleChangeComplete}
				/>
				<Typography>
					Field Label Color
				</Typography>
				<HuePicker 
					width="280px"
					onChangeComplete={this.handleChangeComplete}
				/>
				
      </form>
    );
  }
}

HeaderProperty.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderProperty);
