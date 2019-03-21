import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../../itemTypes';
import { defVal } from '../fieldDefaultValue';
import {
	setCurrentFieldType,
	addNewPage,
	addNewField
} from '../../../../../actions/builder.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FieldPreview from '../field.preview';


const styles = {
	de: {
		width: 'inherit'
	},
	root: {
		minHeight: 550,
		width: 'inherit',
		marginRight: '1.5rem',
		marginBottom: '1.5rem',
		color: '#313131',
		// padding: '1rem',
		textAlign: 'center',
		fontSize: '1rem',
		lineHeight: 'normal',
		borderRadius: 0,
		boxShadow: "0px 0px 1px 0px"
		// float: 'left',
	}
}



const boxTarget = {
  drop(props) {
		// console.log('props, monitor, component', props);
		
    return { page: props.pageNo }
  },
}

const collect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	item: monitor.getItem(),
	dropResult: monitor.getDropResult(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop(),
	didDrop: monitor.didDrop()
})

class Page extends React.Component {
	randomThree () {
		return Math.floor(100 + Math.random() * 900)
	}
	insertUIdAndId = (file, uid) => {
		if (file.type === 'name') {
			// check if json is name then attach id's to it's elements
			file.uid = uid;
			file.element.first.id = 'name-first-' + this.randomThree();
			file.element.last.id = 'name-first-' + this.randomThree();
		} else if (file.type === 'address') {
			// check if json is address then attach id's to it's elements
			file.uid = uid;
			file.element.streetAddress.id = 'address-streetAddress-' + this.randomThree();
			file.element.addressLine.id = 'address-addressLine-' + this.randomThree();
			file.element.city.id = 'address-city-' + this.randomThree();
			file.element.state.id = 'address-state-' + this.randomThree();
			file.element.zip.id = 'address-zip-' + this.randomThree();
			file.element.country.id = 'address-country-' + this.randomThree();
		} else {
			file.uid = uid;
			file.id = file.type + "-" + this.randomThree();
		}
		return file;
	}

	componentDidUpdate(prevProps) {
		const {
			builder,
			setCurrentFieldType,
			addNewPage,
			item,
			didDrop,
			dropResult,
			addNewField
		} = this.props;
		// console.log('didDrop', didDrop, 'dropResult', dropResult, 'item', item);
		console.log('didDrop', didDrop, 'dropResult', dropResult);
		
		if (didDrop && !prevProps.didDrop) {
			// when the element is dropped on the drop zone then 
			// we would send the json default for each field type

			// we check if we are adding a new page or a normal field
			if (item.type === 'page') {
				// we check the their is an already empty bottom page
				// Get the number of pages we have
				let lenOfPages = builder.page.length;
				// minus the page length from one to get the last page by it index
				if (builder.page[lenOfPages - 1].length !== 0) {
					// check if the last page is not empty
					builder.page.push([]);
					addNewPage(builder.page);
					setCurrentFieldType({ type: "header", uid: "header" });
				} else {
					// empty
					console.log("page empty");
				}
			} else {
				
				// get the default vale for the type from the import json file
				let defaultTypeJson = JSON.parse(JSON.stringify(defVal[item.type]));

				// call function to add  // ! universal id and normal id
				let defaultFieldValue = this.insertUIdAndId(defaultTypeJson, item.uid);
				// console.log('defaultTypeJson', defaultFieldValue);

				// get page index i.e page number
				let pageIndex = dropResult.page;
				// console.log('builder.page[pageIndex]', builder.page[pageIndex]);
				
				// * check if the page is empty
				if (builder.page[pageIndex].length === 0) {
					// // insert the oage index and the default value of the field
					// if the page is empty then push new element field
						builder.page[pageIndex].push(defaultFieldValue);

						// console.log('builder.page', builder.page);
						
						// add new field action
						addNewField(builder.page);
						// set the current element 
						setCurrentFieldType({ type: item.type, uid: item.uid });
				} else {
					// ! this code here is to avoid duplicates of elements
					// create an empty array
					let uidvar = []
					// get all the uid's of 
					builder.page[pageIndex].forEach(element => {
						// push all the uid's to this array
						uidvar.push(element.uid);
					});
					// console.log('uid', uidvar);

					// check if the array doen't already consist of this uid
					if (!uidvar.includes(defaultFieldValue.uid)) {
						// // insert the oage index and the default value of the field
						builder.page[pageIndex].push(defaultFieldValue);

						// console.log('builder.page', builder.page);
						
						// add new field action
						addNewField(builder.page);
						// set the current element 
						setCurrentFieldType({ type: item.type, uid: item.uid });
					}
				}
				
				
				
			} // if (item.type === 'page') {


		} // if (this.props.didDrop && !nextProps.didDrop) {
	}


  render() {
    const { classes, canDrop, isOver, connectDropTarget, page, pageNo } = this.props;
		const isActive = canDrop && isOver;
		// #f8f5f5
    let backgroundColor = '#ececec'
    if (isActive) {
      backgroundColor = '#dbc9a0'
    } else if (canDrop) {
      backgroundColor = '#ececec'
		}

    return connectDropTarget(
			<span className={classes.de}>
				<Paper className={classes.root} style={{ backgroundColor }}>
					<Typography>{isActive ? 'Release to drop' : ''}</Typography>

					{/* loop through each page field and display them */}
					{
						page.map((i, index) => (
							<FieldPreview key={index} pageNo={pageNo} index={index} field={i} disabled={true} />
						))
					}
				</Paper>
			</span>
    )
  }
}

Page.propTypes = {
	classes: PropTypes.object.isRequired,
	page: PropTypes.array.isRequired,
	pageNo: PropTypes.number.isRequired
};

function mapStateToProps(state) {
	return {
		builder: state.builder
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		setCurrentFieldType: setCurrentFieldType,
		addNewPage: addNewPage,
		addNewField: addNewField
	}, dispatch)
}


export default DropTarget(ItemTypes.BOX, boxTarget, collect)
(connect(mapStateToProps, mapDispatchToProps)
(withStyles(styles)(Page)))