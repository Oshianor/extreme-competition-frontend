import React, { Component } from 'react';
import SingleLine from './single_line/single_line.field';
import MultiLine from "./multi_line/multi_line.field";

class FieldPreview extends Component {
	displayField = () => {
		const {
			field,
			disabled,
			index
		} = this.props;
		switch (field.type) {
			case 'single_line':
				return <SingleLine index={index} field={field} disabled={disabled} />;
			case 'multi_line':
				return <MultiLine index={index} field={field} disabled={disabled} />;
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

export default FieldPreview;