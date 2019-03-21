import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { TwitterPicker } from 'react-color';
import Typography from '@material-ui/core/Typography';
import { handleHeader } from '../../../../../actions/builder.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
  container: {
    display: 'flex',
		flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10
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
  text: {
    marginTop: 5
  }
});

class HeaderProperty extends React.Component {

  handleChange = name => event => {
    const { handleHeader, builder } = this.props;
    builder.header[name] = event.target.value;
    console.log(builder.header);
    handleHeader(builder.header);
	};
	
	handleChangeComplete = name => (color) =>  {
    const { handleHeader, builder } = this.props;
    builder.header[name] = color.hex;
    console.log(builder.header);
    handleHeader(builder.header);
  }

  render() {
    const { classes, builder } = this.props;

    return (
      <Zoom in={true}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            required
            value={builder.header.name}
            onChange={this.handleChange('name')}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            rowsMax="4"
            fullWidth
            value={builder.header.description}
            onChange={this.handleChange('description')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <Typography className={classes.text}> 
            Background
          </Typography>
          <TwitterPicker 
            width="280px"
            triangle='hide'
            colors = {
              ['#4D4D4D', '#999999', '#73D8FF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']
            }
            onChange={this.handleChangeComplete('backgroundColor')}
          />
          <Typography className={classes.text}>
            Header Text Color
          </Typography>
          <TwitterPicker 
            triangle='hide'
            width="280px"
            colors={
              ['#A4DD00', '#68CCCA', '#FFFFFF', '#AEA1FF', '#FDA1FF', '#333333', '#808080']
            }
            onChange={this.handleChangeComplete('nameColor')}
          />
          <Typography className={classes.text}>
            Description Text Color
          </Typography>
          <TwitterPicker 
            triangle='hide'
            width="280px"
            colors={
              ['#D33115', '#E27300', '#16A5A5', '#FFFFFF', '#194D33', '#0C797D', '#0062B1', '#653294']
            }
            onChange={this.handleChangeComplete('descriptionColor')}
          />
        </form>
      </Zoom>
    );
  }
}

HeaderProperty.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    builder: state.builder
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleHeader: handleHeader
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
(withStyles(styles)(HeaderProperty));
