export const defVal = {
	name: {
		type: "name",
		label: "Name",
		instruction: "",
		size: "m",
		element: {
			first: {
				type: "single_line",
				label: "First Name",
			},
			last: {
				type: "single_line",
				label: "Last Name",
			}
		},
		required: false,
		disabled: false,
		visible: true
	},
	address: {
		type: "address",
		label: "Address",
		instruction: "",
		// size: "m",
		element: {
			streetAddress: { 
				type: "single_line",
				label: "Street Address",
				size: "s",
				visible: true
			},
			addressLine: { 
				type: "single_line",
				label: "Address Line",
				size: "s",
				visible: true
			},
			city: { 
				type: "single_line",
				label: "City",
				size: "s",
				visible: true
			},
			state: { 
				type: "single_line",
				label: "State",
				size: "s",
				visible: true
			},
			zip: { 
				type: "single_line",
				label: "Zip",
				size: "s",
				visible: true
			},
			country: { 
				type: "dropdown",
				label: "Country",
				instruction: "",
				size: "s",
				visible: true
			},
		},
		required: false,
		visible: true
	},
	single_line: {
		type: "single_line",
		label: "Single Line",
		instruction: "",
		size: "l",
		initialValue: "",
		range: {
			min: 0,
			max: 225
		},
		required: false,
		disabled: false,
		visible: true
	},
	multi_line: {
		type: "multi_line",
		label: "Multi Line",
		instruction: "",
		size: "m",
		initialValue: "",
		range: {
			min: 0,
			max: 6000,
			format: "characters" // word
		},
		required: false,
		disabled: false,
		visible: true
	},
	phone: {
		type: "phone",
		label: "Phone",
		instruction: "",
		size: "m",
		format: "international", // "###-###-####"
		initialValue: "",
		required: false,
		disabled: false,
		visible: true
	},
	number: {
		type: "number",
		label: "Number",
		instruction: "",
		size: "m",
		initialValue: "",
		range: {
			min: 0,
			max: 18,
			format: "digits" // values
		},
		required: true,
		allowNegativeValue: false,
		disabled: false,
		visible: true
	},
	decimal: {
		type: "decimal",
		label: "Decimal",
		instruction: "",
		size: "m",
		initialValue: "",
		decimalFormat: "1234567.89",
		decimalPoint: 2,
		range: {
			min: 0,
			max: 18,
			format: "digits" // values
		},
		required: false,
		disabled: false,
		visible: true
	},
	time: {
		type: "time",
		label: "Time",
		instruction: "",
		timeFormat: "12", // 24
		minuteInterval: "1", // 1,5,10,15,30
		required: false,
		disabled: false,
		visible: true
	},
	website: {
		type: "website",
		label: "Website",
		instruction: "",
		size: "m",
		initialValue: "",
		required: false,
		visible: true
	},
	checkbox: {
		type: "checkbox",
		label: "Checkbox",
		instruction: "",
		display: "1 column", // 2 column, 3 column, side by side
		choice: [
			{ checked: false, label: "First choice" },
			{ checked: false, label: "Second Choice" },
			{ checked: false, label: "Third Choice" },
			{ checked: false, label: "Fourth Choice" }
		],
		limit: {
			min: "",
			max: ""
		},
		required: false,
		disabled: false,
		visible: true
	},
	decision_box: {
		type: "decision_box",
		label: "Decision Box",
		instruction: "",
		initialState: false,
		required: false,
		disabled: false,
		visible: true
	},
	date_time: {
		type: "date_time",
		label: "Date Time",
		instruction: "",
		initialValue: "",
		range: {
			from: "",
			to: ""
		},
		required: false,
		disabled: false,
		visible: true
	},
	multi_choice: {
		type: "multi_choice",
		label: "Multi Choice",
		instruction: "",
		size: "m",
		choice: [
			{ checked: false, label: "First choice" },
			{ checked: false, label: "Second Choice" },
			{ checked: false, label: "Third Choice" },
			{ checked: false, label: "Fourth Choice" }
		],
		limit: {
			min: "",
			max: ""
		},
		required: false,
		disabled: false,
		visible: true
	},
	email: {
		type: "email",
		label: "Email",
		instruction: "",
		size: "m",
		initialValue: "",
		allowedDomains: "",
		required: false,
		visible: true
	},
	radio: {
		type: "radio",
		label: "Radio",
		instruction: "",
		display: "1 column", // 2 column, 3 column, side by side
		choice: ["First choice", "Second Choice", "Third Choice"],
		other: false,
		required: false,
		disabled: false,
		visible: true
	},
	currency: {
		type: "currency",
		label: "Currency",
		instruction: "",
		size: "m",
		currency: "NGN",
		decimalFormat: "1234567.89",
		decimalPoint: 2,
		initialValue: "",
		range: {
			min: 0,
			max: 50,
			format: "digits" // value
		},
		required: false,
		disabled: false,
		visible: true
	},
	date: {
		type: "date",
		label: "Date",
		instruction: "",
		initialValue: "",
		range: {
			from: "",
			to: ""
		},
		required: false,
		disabled: false,
		visible: true
	},
	file_upload: {
		type: "file_upload",
		label: "File Upload",
		instruction: "",
		allowedMaxSize: "20mb",
		allowedFileType: "",
		required: false,
		disabled: false,
		visible: true
	},
	dropdown: {
		type: "dropdown",
		label: "Dropdown",
		instruction: "",
		size: "m",
		checked: null,
		choice: [
			"First choice", "Second Choice", "Third Choice", "Fourth Choice"
		],
		required: false,
		disabled: false,
		visible: true
	},
	section: {
		type: "section",
		label: "Section",
		size: 20,
		instruction: "",
	},
	slider: {
		type: "slider",
		label: "Slider",
		instruction: "",
		size: "m",
		range: {
			min: 0,
			max: 100
		},
		required: false,
		disabled: false,
		visible: true
	},
	rating: {
		type: "rating",
		label: "Rating",
		instruction: "",
		count: 5,
		required: false,
		disabled: false,
		visible: true
	},
	description: {
		type: "description",
		label: "Description",
		body: ''
	},
	image: {
		type: "image",
		instruction: "",
		allowedMaxSize: "20mb",
		allowedFileType: "",
		required: false,
		disabled: false,
		visible: true
	},
	unique_id: {
		type: "unique_id",
		label: "Unique ID",
		instruction: "(Note: This field will not show up on the form)",
		startFrom: 1,
		prefix: "",
		suffix: ""
	},
	terms_and_conditions: {
		type: "terms_and_conditions",
		label: "Terms and Conditions",
		showLabel: true,
		terms: "",
		declaration: "",
		status: "I agree to the terms and condition",
		required: false,
		disabled: false,
	},
	signature: {
		type: "signature",
		label: "Signature",
		instruction: "",
		allowedMaxSize: "20MB",
		required: false,
		disabled: false,
	},
	gps: {
		type: "gps",
		label: "GPS",
	},
	page: {
		type: 'page'
	}
} 