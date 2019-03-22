import React, { Component } from 'react';
import SingleLine from './single_line/single_line.field';
import MultiLine from "./multi_line/multi_line.field";
import Phone from "./phone/phone.field";
import Name from './name/name.field';
import PropTypes from 'prop-types';



class FieldPreview extends Component {
	displayField = () => {
		const {
			field,
			disabled,
			index,
			pageNo,
		} = this.props;
		switch (field.type) {
			case 'single_line':
				return <SingleLine pageNo={pageNo} index={index} field={field} disabled={disabled} />;
			case 'multi_line':
				return <MultiLine pageNo={pageNo} index={index} field={field} disabled={disabled} />;
			case 'phone':
				return <Phone pageNo={pageNo} index={index} field={field} disabled={disabled} />;
			case 'name':
				return <Name pageNo={pageNo} index={index} field={field} disabled={disabled} />;
			default:
				break;
		}
	}
	render() {
		return (
			<div>
				{this.displayField()}
			</div>
		);
	}
}
FieldPreview.propTypes = {
	disabled: PropTypes.bool.isRequired,
	field: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	pageNo: PropTypes.number.isRequired
};
export default FieldPreview;